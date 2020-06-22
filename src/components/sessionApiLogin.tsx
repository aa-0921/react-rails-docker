require('dotenv').config();

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
  console.log(
    'process.env.REACT_APP_API_URL_ALL_POST_DATAS!:',
    process.env.REACT_APP_API_URL_ALL_POST_DATAS!,
  );
  // }

  return await fetch(loginUrl, { method, headers, body })
    .then((response) => {
      console.log('user.Login');

      if (response.status == 200) {
        User.set('isLoggedIn', 'true');
        console.log('isLoggedIn(sessionApi.tsx):', User.isLoggedIn());
        // response.json().then((response) => {
        //   const responseData = response.data;
        //   console.log('responseData:', responseData);
        // });
        return response.json().then((response) => {
          const responseData = response.data.id;
          console.log('responseData:', responseData);
          // setResponseUserData(responseData);
          User.set('responseData', JSON.stringify(responseData));
        });
      } else {
        User.set('isLoggedIn', 'false');
        if (process.env.NODE_ENV !== 'production') {
          console.log('isLoggedIn(else後):', User.isLoggedIn());
        }

        throw new Error();
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
