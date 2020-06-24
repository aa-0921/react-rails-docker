require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Grid, Row, Note, Button, Divider } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import User from '../components/User';

export const List = (props: any) => {
  const onClickFollow = async (userId: any) => {
    const obj = {
      current_user_id: User.get('currentUserId'),
    };
    const body = JSON.stringify(obj);
    const method = 'PUT';
    const postUrl: string = process.env.REACT_APP_API_URL_USERS + '/follow/' + userId;

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        // if (response.status == 204) {
        if (response.status == 200) {
          props.pushToFollowUsers(props.user.id);
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

    await fetch(postUrl, { method, body })
      .then((response) => {
        console.log(response.status);
        // if (response.status == 204) {
        if (response.status == 200) {
          props.removeFromFollowUsers(props.user.id);
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

  return (
    <>
      <li key={props.user.id}>
        <Link to={'/profilepage/' + props.user.id}>{props.user.name}&emsp;</Link>
        {props.followUsersList.includes(props.user.id) ? (
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
