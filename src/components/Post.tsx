require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Grid, Row, Note, Button, Divider, Spacer } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import User from './User';

export const Post = (props: any) => {
  // const onClickLike = async (postId: any) => {
  //   const obj = {
  //     current_user_id: User.get('currentUserId'),
  //   };
  //   const body = JSON.stringify(obj);
  //   const method = 'PUT';
  //   const postUrl: string = process.env.REACT_APP_API_URL_USERS + '/Like/' + postId;

  //   await fetch(postUrl, { method, body })
  //     .then((response) => {
  //       console.log(response.status);
  //       // if (response.status == 204) {
  //       if (response.status == 200) {
  //         props.pushToLikePosts(props.post.id);
  //       } else {
  //         if (process.env.NODE_ENV !== 'production') {
  //           console.log('投稿失敗');
  //         }
  //         throw new Error();
  //       }
  //     })
  //     .catch((error) => {
  //       if (process.env.NODE_ENV !== 'production') {
  //         console.log('投稿失敗');
  //       }
  //     });
  // };
  // const onClickUnLike = async (postId: any) => {
  //   const obj = {
  //     current_user_id: User.get('currentUserId'),
  //   };

  //   const body = JSON.stringify(obj);
  //   const method = 'PUT';
  //   const postUrl: string = process.env.REACT_APP_API_URL_USERS + '/unLike/' + postId;

  //   await fetch(postUrl, { method, body })
  //     .then((response) => {
  //       console.log(response.status);
  //       // if (response.status == 204) {
  //       if (response.status == 200) {
  //         props.removeFromLikePosts(props.post.id);
  //       } else {
  //         if (process.env.NODE_ENV !== 'production') {
  //           console.log('投稿失敗');
  //         }
  //         throw new Error();
  //       }
  //     })
  //     .catch((error) => {
  //       if (process.env.NODE_ENV !== 'production') {
  //         console.log('投稿失敗');
  //       }
  //     });
  // };
  // var listyle = {
  //   list-style-type: none;
  // };
  return (
    <>
      <Row>
        <div className="flex items-center">
          <div className="flex-1  text-center">
            <li key={props.post.id} className="flex items-center m-auto">
              <Link to={'/profilepage/' + props.post.id}>{props.post.content}&emsp;</Link>
              <Button
                type="success"
                size="small"
                auto
                ghost
                // onClick={() => onClickLike(props.post.id)}
              >
                Like
                <Icon.Heart size={16} />
              </Button>
              {/* {props.LikePostsList.includes(props.post.id) ? (
                <Button
                  type="warning"
                  size="small"
                  auto
                  ghost
                  // onClick={() => onClickUnLike(props.post.id)}
                  className="m-auto"
                >
                  <Icon.EyeOff size={16} />
                  UnLike
                </Button>
              ) : (
                <Button
                  type="success"
                  size="small"
                  auto
                  ghost
                  // onClick={() => onClickLike(props.post.id)}
                >
                  <Icon.Eye size={16} />
                  Like
                </Button>
              )} */}
            </li>{' '}
          </div>
        </div>
      </Row>
      <Divider />
    </>
  );
};
