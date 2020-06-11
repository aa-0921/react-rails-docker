import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Login } from '../pages/Login';
import { Logout } from '../pages/Logout';
import { HomePage } from '../components/HomePage';

// import List1 from './List1';
// import List2 from './List2';
import { Auth } from '../components/Auth';
import User from '../components/User';
// import { List } from './list';

export const LoginApp = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />

        <Auth>
          <Switch>
            {/* <Route exact path="/list" component={List} /> */}
            {/* <Redirect from="/" to="/list" /> */}

            <Route exact path="/homepage" component={HomePage} />
            <Redirect from="/" to="/homepage" />
          </Switch>
        </Auth>
      </Switch>
    </Router>
  );
};
