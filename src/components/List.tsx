require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Grid, Row, Note, Button, Divider } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import User from '../components/User';

export const List = (props: any) => {
  const [idArrayFollowUsers, setIdArrayFollowUsers] = useState([] as number[]);
  const [isFollow, setIsFollow] = useState(Boolean);

  console.log('props.followUsersList: ', props.followUsersList);

  useEffect(() => {
    setIdArrayFollowUsers(props.followUsersList);
  }, [props.followUsersList]);
  // }, [idArrayFollowUsers]);

  console.log('idArrayFollowUsers: ', idArrayFollowUsers);
  const reloadIsFollow = () => {
    // setIsFollow(idArrayFollowUsers.some((u) => u === props.user.id));

    const isFollow = idArrayFollowUsers.some((u) => u === props.user.id);
    return isFollow;
  };
  reloadIsFollow();
  // console.log('isFollow: ', isFollow);

  const onClickFollow = async (userId: any) => {
    console.log('onClickFollow直後userId: ', userId);
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

          // const copyIdArrayFollowUsers = [...idArrayFollowUsers];
          // copyIdArrayFollowUsers.push(userId);

          const copyIdArrayFollowUsers = [...idArrayFollowUsers, userId];

          // useEffect(() => {
          setIdArrayFollowUsers(copyIdArrayFollowUsers);
          // }, []);
          // reloadIsFollow();

          console.log('idPushedArray: ', idArrayFollowUsers);
          // const isFollow = true;
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

  return (
    <>
      <li key={props.user.id}>
        <Link to={'/profilepage/' + props.user.id}>{props.user.name}&emsp; </Link>
        {idArrayFollowUsers.some((u) => u === props.user.id) ? (
          <Button
            type="warning"
            size="mini"
            auto
            ghost
            onClick={() => onClickUnFollow(props.user.id)}
          >
            <Icon.Eye size={16} />
            UnFollow
          </Button>
        ) : (
          <Button
            type="success"
            size="small"
            auto
            ghost
            onClick={() => onClickFollow(props.user.id)}
          >
            <Icon.Eye size={16} />
            Follow
          </Button>
        )}
      </li>
      <Divider />
    </>
  );
};
