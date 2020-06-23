require('dotenv').config();

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Grid, Row, Note, Button, Divider } from '@zeit-ui/react';
import * as Icon from '@zeit-ui/react-icons';
import User from '../components/User';
import { FetchData } from '../scripts/api/FetchData';
import { List } from '../components/List';

export const MemberList = (props: any): any => {
  const followUsersList: any = props.followUsers.map((e: any) => {
    return e['id'];
  });

  // const List = props.fetchUsers.map((user: any) => {

  return (
    <>
      {props.fetchUsers.map((user: any) => (
        <List user={user} followUsersList={followUsersList} />
      ))}
    </>
  );
};
