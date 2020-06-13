import React, { Component } from 'react';
// import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import User from '../components/User';
import { Alert } from 'react-bootstrap';
import { useState, useEffect } from 'react';

type LogoutProps = {
  errMessage: '';
  message: string;
};

export const Logout = (props: LogoutProps) => {
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    const logout = async () => {
      try {
        await User.logout();
        console.log('Logout.tsx', User.isLoggedIn());
      } catch (e) {
        setErrMessage('メールアドレスかパスワードが違います');
      }
    };
    logout();
  }, []);

  return (
    // <Container className="center">
    // <Row className="justify-content-md-center">
    <div>
      {props.errMessage && <Alert variant="danger">{props.message}</Alert>}
      <h2>ログアウトしました</h2>
      <div className="text-center">
        <Link to="/login">ログイン画面へ</Link>
      </div>
    </div>
    // </Row>
    // </Container>
  );
};
