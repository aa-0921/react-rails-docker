require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';
import { Grid, Row, Note, Button, Divider } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import { Number } from 'core-js';
import { MemberList } from '../components/memberList';

export const MemberListApp = () => {
  const [fetchUsers, setFetchUsers] = useState([]);
  const [followUsers, setFollowUsers] = useState<any[]>([]);
  const currentUserId = 1;
  const getFollowListUrl: string =
    process.env.REACT_APP_API_URL_USERS + '/follow_list/' + currentUserId;
  useEffect(() => {
    FetchData(getFollowListUrl).then((res) => {
      setFollowUsers(res.data);
    });
  }, []);

  // const Show = ({ match }: { match: any }) => {
  //   let params = match.params;
  //   return (
  //     <div>
  //       UserName,Email is{' '}
  //       <div>
  //         <strong>{params.id}</strong>
  //       </div>
  //     </div>
  //   );
  // };
  const url: string = process.env.REACT_APP_API_URL_USERS!;

  useEffect(() => {
    FetchData(url).then((res) => setFetchUsers(res.data));
  }, []);
  return (
    <>
      <Router>
        <div>
          {/* <Show /> */}
          <span>
            <MemberList fetchUsers={fetchUsers} followUsers={followUsers} />
          </span>

          <Switch>
            {/* <Route path="/post/:id" component={Show} /> */}
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};
