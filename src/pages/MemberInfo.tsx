require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';

export const MemberInfo = () => {
  const Show = ({ match }: { match: any }) => {
    let params = match.params;
    return (
      <div>
        UserName,Email is
        <div>
          <strong>{params.id}</strong>
        </div>
      </div>
    );
  };

  const Users = () => {
    const [hasError, setErrors] = useState(false);
    const [users, setUsers] = useState({});

    const url: string = process.env.REACT_APP_API_URL_USERS!;
    console.log('url:', url);

    useEffect(() => {
      FetchData(url).then((res) => setUsers(res));
    }, []);
    return (
      <div>
        <span>{JSON.stringify(users)}</span>
        <hr />
        <span>Has error: {JSON.stringify(hasError)}</span>
      </div>
    );
  };
  return (
    <Router>
      <div>
        <Users />

        <nav>
          <ul>
            <li>
              <Link to="/">UserName1</Link>
            </li>
            <li>
              <Link to="/post/2">UserName2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/post/:id" component={Show} />
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};
