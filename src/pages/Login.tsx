import * as React from 'react';
import { Link } from 'react-router-dom';

// export const Login = () => {
//   return <h1>hoge</h1>;
// };

// import React, { Component } from 'react';
// import { Form } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import User from '../components/User';
import { useState, useEffect } from 'react';

// import { Button } from '@zeit-ui/react'
import * as H from 'history';
import { App } from '../../src/App';
import { Grid, Row, Note, Button } from '@zeit-ui/react';

type LoginProps = {
  email: '';
  password: '';
  errMessage: '';
  history: H.History;
  message: string;
};

export const Login = (props: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMessage, setErrMessage] = useState('');

  useEffect(() => {
    User.set('isLoggedIn', false.toString());
    if (process.env.NODE_ENV !== 'production') {
      console.log('isLoggedIn(Login.tsx):', User.isLoggedIn());
    }
  }, []);
  const onClickLogin = async () => {
    try {
      await User.login(email, password);
      if (process.env.NODE_ENV !== 'production') {
        console.log(User.isLoggedIn());
      }
      props.history.push('/');
    } catch (e) {
      setErrMessage('メールアドレスかパスワードが違います');
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Grid.Container gap={-10} justify="center">
      <Row className="justify-content-md-center">
        <form>
          {props.errMessage && <Note type="warning">{props.message}</Note>}
          <p>
            <b>ログイン</b>
          </p>
          <div className="form-group">
            <label className="form-label">メールアドレス</label>
            {/* <Form.Group controlId="email">
            <Form.Label>メールアドレス</Form.Label> */}
            <input
              type="email"
              placeholder="メールアドレスを入力"
              onChange={handleChangeEmail}
              value={props.email}
            />
          </div>
          <div className="form-group">
            <label className="form-label">パスワード</label>
            <input
              type="password"
              placeholder="パスワードを入力"
              onChange={handleChangePassword}
              value={props.password}
            />
          </div>
          <Button type="success" ghost onClick={onClickLogin}>
            ログイン
          </Button>
          <Link
            to="/signup"
            className="text-lg text-white ml-4 px-3 py-2 rounded-md text-sm font-medium hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            <Button type="secondary" ghost onClick={onClickLogin}>
              Signup
            </Button>
          </Link>
          <ul className="follow-button">
            <li className="fbpagebtn">
              <a href="" title="Facebookページ">
                {/* <i className="fab fa-facebook-square fa-5x"></i> */}
              </a>
            </li>
            <li className="twbtn">
              <a href="" title="Twitter">
                <i className="fa fa-twitter-square fa-4x"></i>
              </a>
            </li>
            <li className="gpbtn">
              <a href="" title="Google+">
                <i className="fa fa-google-plus-square fa-4x"></i>
              </a>
            </li>
            <li className="feedlybtn">
              <a href="http://feedly.com/i/subscription/feed/feedのURL" title="feedly">
                <i className="fa fa-rss-square fa-4x"></i>
              </a>
            </li>
          </ul>
        </form>
      </Row>
    </Grid.Container>
  );
};
