import User from './User';
import React, { useState, useEffect } from 'react';

type LoginParams = {
  email: string;
  password: string;
};
// const [responseUserData, setResponseUserData] = useState([]);

export const sessionApiLogin = async ({ email, password }: LoginParams) => {
  console.log('process.env.NODE_ENV:', process.env.NODE_ENV);

  const obj = {
    email: email,
    password: password,
  };
  const method = 'POST';
  const body = JSON.stringify(obj);
  const credentials = 'include';
  const mode = 'cors';
  const headers = {
    'Content-Type': 'application/json',
  };
  const loginUrl: string = process.env.REACT_APP_API_URL + '/sign_in';
  console.log('loginUrl:', loginUrl);

  // if (process.env.NODE_ENV !== 'production') {
  console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
  console.log('loginUrl:', loginUrl);
  console.log('process.env.REACT_APP_API_URL_SIGN_IN!:', process.env.REACT_APP_API_URL_SIGN_IN!);
  console.log('process.env.REACT_APP_API_URL_POSTS!:', process.env.REACT_APP_API_URL_POSTS!);
  // }

  // return await fetch(loginUrl, { method: 'POST', headers, body, mode, credentials })
  return await fetch(loginUrl, { method: 'POST', headers, body, mode })
    .then((response) => {
      console.log('user.Login');
      console.log('response:', response);
      console.log('response.body:', response.body);
      console.log('response.status:', response.status);

      if (response.status == 200) {
        User.set('isLoggedIn', 'true');
        // console.log('isLoggedIn(sessionApi.tsx):', User.isLoggedIn());
        // console.log(
        //   'response.json():',
        //   response.json().then((response_json) => response_json.header),
        // );
        // response.json().then((response) => {
        //   const responseData = response.data;
        //   console.log('responseData:', responseData);
        // });
        // interface HeadersObject {
        // 'x-csrf-token': string;
        // [key: string]: any;
        // }
        // const x-csrf-token: keyof HeaderObject = 'thirdKey';
        // const headers = {
        // 'x-csrf-token': response.headers['x-csrf-token'];
        // 'x-csrf-token': '',
        // } as HeadersObject;
        // const headers = response.headers as HeadersObject;
        const headers: any = response.headers;
        console.log('response.headers:', headers);

        // const x-csrf-token: keyof ISomeObject = 'secondKey';
        // const key: string = 'x-csrf-token';
        // const key: string = 'x-csrf-token';

        // var token: string = response.headers['x-csrf-token'] as HeaderObject;
        var token = headers.get('X-CSRF-Token');

        // console.log('response.headers:', JSON.stringify(response.headers));
        console.log('response.headers.get(x-auth-token):', response.headers.get('x-auth-token'));

        console.log('token:::', token);
        for (let [key, value] of headers) {
          console.log(`${key} = ${value}`);
        }
        // console.log("headers['x-csrf-token']:", headers['x-csrf-token']);

        // var token = response.headers['x-csrf-token'];

        if (token) {
          window.localStorage.setItem('csrf-token', token);
          const csrf = window.localStorage.getItem('csrf-token');
          console.log('csrf:', csrf);
        }
        return response.json().then((response) => {
          const currentUserId = response.data.id;
          console.log('currentUserId:', currentUserId);
          // setResponseUserData(responseData);
          User.set('currentUserId', JSON.stringify(currentUserId));
        });
      } else {
        User.set('isLoggedIn', 'false');
        if (process.env.NODE_ENV !== 'production') {
        }
      }
    })
    .catch((error) => {
      User.set('isLoggedIn', 'false');
      if (process.env.NODE_ENV !== 'production') {
        console.log('isLoggedIn(catch後):', User.isLoggedIn());
        console.log('errorの内容', JSON.stringify(error.json));
      }
    });
};
