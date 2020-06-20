import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Logout } from '../pages/Logout';
import { Signup } from '../pages/Signup';

import { HomePage } from '../components/HomePage';

import { Auth } from '../components/Auth';
import User from '../components/User';
// import { List } from './list';
import { App } from '../../src/App';
// import { UserButton } from '../components/UserButton';

export const LoginApp = () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('isLoggedIn(LoginApp.tsx):', User.isLoggedIn());
  }

  return (
    <Router>
      <Switch>
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/login" component={UserButton} /> */}

        <Route exact path="/logout" component={Logout} />
        <Route exact path="/signup" component={Signup} />
        {/* 本番では削除（このままでは非ログイン状態でもAppにアクセスできてしまう。） */}
        <Route exact path="/app" component={App} />

        <Auth>
          <Switch>
            {/* <Route exact path="/list" component={List} /> */}
            {/* <Redirect from="/" to="/list" /> */}

            <Route exact path="/app" component={App} />
            <Redirect from="/" to="/App" />
          </Switch>
        </Auth>
      </Switch>
    </Router>
  );
};
