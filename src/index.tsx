import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './scss/index.scss';
// require('./index.scss');

import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Reducers';
import { rootSaga } from './sagas/index';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const target = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  target,
);
