require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Grid, Row, Note, Button, Divider } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import User from '../components/User';
import { FetchData } from '../scripts/api/FetchData';

const [fetchUsers, setFetchUsers] = useState([]);
const [idArrayFollowUsers, setIdArrayFollowUsers] = useState([] as number[]);
const [followUsers, setFollowUsers] = useState<any[]>([]);

export const MemberList = () => {
  const onClickFollow = async (userId: any) => {
    const obj = {
      current_user_id: User.get('currentUserId'),
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = process.env.REACT_APP_API_URL_USERS + '/follow/' + userId;

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
  const onClickUnFollow = async (userId: any) => {
    const obj = {
      current_user_id: User.get('currentUserId'),
    };

    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = process.env.REACT_APP_API_URL_USERS + '/unfollow/' + userId;

    await fetch(postUrl, { method, body });
  };
  fetchUsers.map((user: any) => {
    const url: string = process.env.REACT_APP_API_URL_USERS!;

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

    const isFollow = idArrayFollowUsers.some((u) => u === user.id);

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
};
