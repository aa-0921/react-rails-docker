import React from 'react';
import { Redirect } from 'react-router-dom';
import User from './User';

interface AuthProps {
  children: React.ReactNode;
}

export const Auth = (props: AuthProps) =>
  User.isLoggedIn() ? props.children : <Redirect to={'/login'} />;
