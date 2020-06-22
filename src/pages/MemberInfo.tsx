require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';
import { Grid, Row, Note, Button, Divider } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import User from '../components/User';

export const MemberInfo = () => {
  const Show = ({ match }: { match: any }) => {
    let params = match.params;
    return (
      <div>
        UserName,Email is{' '}
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

    const onClickFollow = async (userId: any) => {
      console.log('userId:', userId);
      const obj = {
        current_user_id: User.get('currentUserId'),
      };
      console.log('userId:', userId);

      const body = JSON.stringify(obj);
      console.log('body:', body);

      const method = 'PUT';
      const postUrl: string = process.env.REACT_APP_API_URL_USERS + '/follow/' + userId;

      await fetch(postUrl, { method, body });
    };
    // const [userId, setUserId] = useState('');

    const memberList = fetchUsers.map((e: any) => {
      // setUserId(e.id);

      return (
        <>
          <li key={e.id}>
            <Link to={'/user/' + e.id}>{e.name}&emsp; </Link>
            <Button type="success" size="mini" auto ghost onClick={() => onClickFollow(e.id)}>
              <Icon.Eye size={16} />
              FOLLOW
            </Button>
          </li>
          <Divider />
        </>
      );
    });

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
        {/* <Show /> */}

        <Users />

        <Switch>
          <Route path="/post/:id" component={Show} />
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};
