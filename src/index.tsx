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
// }

const target = document.getElementById('app');
ReactDOM.render(
  <LoginApp />,

  target,
);
