import User from './User';

import React from 'react';
import axios from 'axios';
// @ts-ignore
import { csrfToken } from 'rails-ujs';

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
  // const loginUrl: string = process.env.REACT_APP_API_URL + '/sign_in';
  const loginUrl: string = 'http://localhost:3000/User/sign_in';

  //  /User/sign_in
  axios.defaults.headers.common['X-CSRF-Token'] = csrfToken();

  return await axios
    .post(loginUrl, { body })
    .then((response) => {
      console.log('response', response);
    })
    .catch((err) => {
      console.log('err', err);
    });
};
