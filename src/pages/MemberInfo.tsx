require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FetchData } from '../scripts/api/FetchData';

export const MemberInfo = ({ match }: { match: any }) => {
  let params = match.params;
  return (
    <div>
      UserName,Email is
      <div>
        <strong>{params.id}</strong>
        <MemberList />
      </div>
    </div>
  );
};

// const Users = () => {
//   const [hasError, setErrors] = useState(false);
//   const [fetchUsers, setFetchUsers] = useState({});
//   const url: string = process.env.REACT_APP_API_URL_USERS!;
//   console.log('url:', url);

//   useEffect(() => {
//     FetchData(url).then((res) => setFetchUsers(res));
//   }, []);
// };
const MemberList = () => {
  const [hasError, setErrors] = useState(false);
  const [fetchUsers, setFetchUsers] = useState({});
  const url: string = process.env.REACT_APP_API_URL_USERS!;
  console.log('url:', url);

  useEffect(() => {
    // FetchData(url).then((res) => setFetchUsers(res.data)
    FetchData(url)
      .then((res) => res.json())
      .then((responseJson) => setFetchUsers(responseJson.data));
  }, []);
  console.log('fetchUsers:', fetchUsers);
  // const userList as any[] = JSON.stringify(fetchUsers);
  const userList = fetchUsers as [];

  // console.log('userList:', userList);

  const memberList = userList.map((e: any) => (
    <li key={e.id}>
      <Link to={'/user/' + e.id}>{e.name}</Link>
    </li>
  ));
  return (
    <div>
      <ul>{memberList}</ul>
    </div>
  );
};
