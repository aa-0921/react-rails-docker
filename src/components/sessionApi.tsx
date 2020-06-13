import * as React from 'react';

import User from './User';
import { App } from '../App';

type LoginParams = {
  email: string;
  password: string;
};
// const loginUrl: string = process.env.REACT_APP_API_URL_SIGN_IN!;
// const logoutUrl: string = process.env.REACT_APP_API_URL_SIGN_OUT!;

export const sessionApi = {
  login: async ({ email, password }: LoginParams) => {
    const obj = {
      email: email,
      password: password,
    };
    const method = 'POST';
    const body = JSON.stringify(obj);
    const credentials = 'include';
    const mode = 'cors';
    const headers = {
      // Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    return fetch(
      'http://localhost:3000/api/v1/auth/sign_in',
      // { method, headers, body, credentials, mode },
      { method, headers, body },
    )
      .then((response) => {
        if (response.status == 200) {
          User.set('isLoggedIn', 'true');
          console.log('isLoggedIn(sessionApi.tsx):', User.isLoggedIn());
          return <App />;
          // return 'true';
        } else {
          User.set('isLoggedIn', 'false');
          console.log('isLoggedIn(else後):', User.isLoggedIn());

          // console.log('elseのresponse', JSON.stringify(response.json()));
          // console.log('response.json()', response.json());
          // throw new HttpError(response);
          throw new Error();
          // return response.json();
          // response.text().then((text) => console.log(text));
        }
      })
      .catch((error) => {
        User.set('isLoggedIn', 'false');
        console.log('isLoggedIn(catch後):', User.isLoggedIn());

        console.log('errorの内容', JSON.stringify(error.json));

        // return 'false';
      });
  },

  //       });
  // ).then((response) => {
  //   if (response.ok) {
  //     // const loginStatus = 'true';

  //     // return loginStatus;
  //     // return response.text();
  //     return true;
  //   } else {
  //     return false;
  //     // return Promise.reject(new Error('エラーです！'));
  //   }
  // });
  // .catch((error) => {
  //   console.log('error');
  //   console.error(error);
  //   const loginStatus = 'false';
  //   // return error;
  //   return loginStatus;
  // });
  logout: async () => {
    await fetch('http://localhost:3000/api/v1/auth/sign_out', {
      // fetch(logoutUrl, {
      method: 'DELETE',
    }).then((response) => {
      console.log('success');
      console.log('reaponse(sessionApi.login)');
      console.log(response);
      const loginStatus = 'false';
      // return error;
      return loginStatus;
      // return response;
    });
  },
};
