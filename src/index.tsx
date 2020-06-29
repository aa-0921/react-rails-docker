import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './scss/index.scss';
import { LoginApp } from './pages/LoginApp';

import 'font-awesome/css/font-awesome.min.css';

// const response: any = Response;
// console.log('response:::', response);
// console.log('response.data:::', response.data);

// const token = response.Headers.get('X-CSRF-token');
// console.log('token:::', token);

// if (token) {
//   // save token in localStorage for later use
//   window.localStorage.setItem('csrf-token', token);
// }  const method = 'POST';

// const credentials = 'include';
const mode = 'cors';
const headers = {
  'Content-Type': 'application/json',
};
const loginUrl: string = process.env.REACT_APP_API_URL_USERS + '/get_token';
fetch(loginUrl, { headers, mode }).then((response) => {
  const headers: any = response.headers;
  console.info('headers:::', headers);

  const token = headers.get('X-CSRF-token');
  console.info('token:::', token);
  if (token) {
    window.localStorage.setItem('csrf-token', token);
    const csrf = window.localStorage.getItem('csrf-token');
    console.log('csrf:::', csrf);
    console.log('response.headers:', headers);
  }
});

const target = document.getElementById('app');
ReactDOM.render(<LoginApp />, target);
