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
    const [fetchUsers, setFetchUsers] = useState([]);

    const url: string = process.env.REACT_APP_API_URL_USERS!;
    console.log('url:', url);

    useEffect(() => {
      FetchData(url).then((res) => setFetchUsers(res.data));
    }, []);
    console.log('fetchUsers[0]:', fetchUsers[0]);
    console.log('typeof fetchUsers:', typeof fetchUsers);

    console.log('Array.isArray(fetchUsers):', Array.isArray(fetchUsers));
    // const strUsers = JSON.stringify(fetchUsers[0]);
    const memberList = fetchUsers.map((e: any) => (
      <li key={e.id}>
        <Link to={'/user/' + e.id}>{e.name}</Link>
      </li>
    ));
    return (
      <div>
        <span>{memberList}</span>
        <hr />
        <span>Has error: {JSON.stringify(hasError)}</span>
      </div>
    );
  };
  return (
    <Router>
      <div>
        <Users />

        <Switch>
          <Route path="/post/:id" component={Show} />
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};
