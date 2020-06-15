import { sessionApi } from '../../components/sessionApi';
import { useState } from 'react';

const [isLoggedIn, setIsLoggedIn] = useState(false);

const UserLogin = async (email: string, password: string) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log(email);
    console.log(password);
  }
  await sessionApi.login({ email, password });
  if (process.env.NODE_ENV !== 'production') {
    console.log('isLoggedIn(User.tsxログイン処理後):' + isLoggedIn);
  }

  return true;
};
