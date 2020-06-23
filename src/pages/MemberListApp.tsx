require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';
import { Grid, Row, Note, Button, Divider } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import User from '../components/User';
import { Number } from 'core-js';

export const MemberListApp = () => {
  // const [isFollow, setIsFollow] = useState(Boolean);
  const [idArrayFollowUsers, setIdArrayFollowUsers] = useState([] as number[]);
  // const [hasError, setErrors] = useState(false);
  const [fetchUsers, setFetchUsers] = useState([]);
  const [followUsers, setFollowUsers] = useState<any[]>([]);
  const Show = ({ match }: { match: any }) => {
    let params = match.params;
    return (
      <div>
        UserName,Email is{' '}
        <div>
          <strong>{params.id}</strong>
        </div>
      </div>
    );
  };
  const url: string = process.env.REACT_APP_API_URL_USERS!;
  console.log('url:', url);

  useEffect(() => {
    FetchData(url).then((res) => setFetchUsers(res.data));
  }, []);
  const currentUserId = 1;
  const getFollowListUrl: string =
    process.env.REACT_APP_API_URL_USERS + '/follow_list/' + currentUserId;

  FetchData(getFollowListUrl).then((res) => {
    useEffect(() => {
      setFollowUsers(res.data);
    }, []);
  });

  const followUsersList: any = followUsers.map((e: any) => {
    return e['id'];
  });
  useEffect(() => {
    setIdArrayFollowUsers(followUsersList);
  }, []);
  const onClickFollow = async (userId: any) => {
    const obj = {
      current_user_id: User.get('currentUserId'),
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = process.env.REACT_APP_API_URL_USERS + '/follow/' + userId;
    // const isFollow = true;

    await fetch(postUrl, { method, body });
  };

  const onClickUnFollow = async (userId: any) => {
    console.log('userId:', userId);
    const obj = {
      current_user_id: User.get('currentUserId'),
    };
    console.log('userId:', userId);

    const body = JSON.stringify(obj);
    console.log('body:', body);

    const method = 'PUT';
    const postUrl: string = process.env.REACT_APP_API_URL_USERS + '/unfollow/' + userId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        if (response.status == 200) {
          if (process.env.NODE_ENV !== 'production') {
            console.log('投稿成功');
          }
          console.log('idArrayFollowUsers: ', idArrayFollowUsers);
          const copyIdArrayFollowUsers = [...idArrayFollowUsers];

          copyIdArrayFollowUsers.push(userId);
          useEffect(() => {
            setIdArrayFollowUsers(copyIdArrayFollowUsers);
          }, []);

          console.log('idPushedArray: ', idArrayFollowUsers);

          // setIdArrayFollowUsers(idPushedArray);
        } else {
          if (process.env.NODE_ENV !== 'production') {
            console.log('投稿失敗');
          }
          throw new Error();
        }
      })
      .catch((error) => {
        if (process.env.NODE_ENV !== 'production') {
          console.log('投稿失敗');
        }
      });
  };
  const memberList = fetchUsers.map((user: any) => {
    // const [isFollow, setIsFollow] = useState(Boolean);
    // useEffect(() => {
    //   setIsFollow(idArrayFollowUsers.some((u) => u === user.id));
    // }, []);
    const isFollow = idArrayFollowUsers.some((u) => u === user.id);
    // setIdArrayFollowUsers(idPushedArray);

    // idArrayFollowUsers.some((u) => u === user.id);
    // const isFollow = idArrayFollowUsers.includes(user.id);
    // setIsFollow(idArrayFollowUsers.some((u) => u === user.id));

    return (
      <>
        <li key={user.id}>
          <Link to={'/profilepage/' + user.id}>{user.name}&emsp; </Link>
          {isFollow ? (
            <Button type="warning" size="mini" auto ghost onClick={() => onClickUnFollow(user.id)}>
              <Icon.Eye size={16} />
              UnFollow
            </Button>
          ) : (
            <Button type="success" size="mini" auto ghost onClick={() => onClickFollow(user.id)}>
              <Icon.Eye size={16} />
              Follow
            </Button>
          )}
        </li>
        <Divider />
      </>
    );
  });
  const Users = () => {
    console.log('fetchUsers[0]:', fetchUsers[0]);
    console.log('typeof fetchUsers:', typeof fetchUsers);
    console.log('Array.isArray(fetchUsers):', Array.isArray(fetchUsers));
    // const strUsers = JSON.stringify(fetchUsers[0]);

    // idArrayFollowUsers.push(7878787);
    console.log('idArrayFollowUsers:', idArrayFollowUsers);

    // ここでfollowUsersのIDのみを抽出した配列の中にe.idがあるかを確認して、合った場合はすでにフォローしていることになるので、relationをtrueにする。

    return (
      <div>
        <span>{memberList}</span>

        <hr />
        {/* <span>Has error: {JSON.stringify(hasError)}</span> */}
      </div>
    );
  };
  return (
    <Router>
      <div>
        {/* <Show /> */}

        <Users />

        <Switch>
          <Route path="/post/:id" component={Show} />
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};
