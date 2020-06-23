require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';
import { Grid, Row, Note, Button, Divider } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import User from '../components/User';

export const MemberListApp = () => {
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

  const Users = () => {
    const [hasError, setErrors] = useState(false);
    const [fetchUsers, setFetchUsers] = useState([]);

    const url: string = process.env.REACT_APP_API_URL_USERS!;
    console.log('url:', url);

    useEffect(() => {
      FetchData(url).then((res) => setFetchUsers(res.data));
    }, []);
    console.log('fetchUsers[0]:', fetchUsers[0]);
    console.log('typeof fetchUsers:', typeof fetchUsers);
    console.log('Array.isArray(fetchUsers):', Array.isArray(fetchUsers));
    // const strUsers = JSON.stringify(fetchUsers[0]);

    const onClickFollow = async (userId: any) => {
      console.log('userId:', userId);
      const obj = {
        current_user_id: User.get('currentUserId'),
      };
      console.log('userId:', userId);

      const body = JSON.stringify(obj);
      console.log('body:', body);

      const method = 'PUT';
      const postUrl: string = process.env.REACT_APP_API_URL_USERS + '/follow/' + userId;

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

      await fetch(postUrl, { method, body });
    };
    const currentUserId = 1;

    const method = '';
    const getFollowListUrl: string =
      process.env.REACT_APP_API_URL_USERS + '/follow_list/' + currentUserId;
    const [followUsers, setFollowUsers] = useState<any[]>([]);

    useEffect(() => {
      FetchData(getFollowListUrl).then((res) => setFollowUsers(res.data));
    }, []);
    const idArrayFollowUsers = followUsers.map((e: any) => {
      return e['id'];
    });

    // ここでfollowUsersのIDのみを抽出した配列の中にe.idがあるかを確認して、合った場合はすでにフォローしていることになるので、relationをtrueにする。

    const memberList = fetchUsers.map((user: any) => {
      // const currentUserId = User.get('currentUserId');
      const isFollow = idArrayFollowUsers.some((u) => u === user.id);
      return (
        <>
          <li key={user.id}>
            <Link to={'/profilepage/' + user.id}>{user.name}&emsp; </Link>
            {/* <Button type="success" size="mini" auto ghost onClick={() => onClickFollow(e.id)}> */}
            <Button type="success" size="mini" auto ghost onClick={() => onClickFollow(user.id)}>
              <Icon.Eye size={16} />
              FOLLOW
            </Button>
          </li>
          <Divider />
        </>
      );
    });
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
