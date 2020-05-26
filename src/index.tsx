import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './scss/index.scss';
// require('./index.scss');

const target = document.getElementById('app');
ReactDOM.render(<App />, target);
