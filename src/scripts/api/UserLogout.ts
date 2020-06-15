import { sessionApi } from '../../components/sessionApi';
import { useState } from 'react';
const [isLoggedIn, setIsLoggedIn] = useState(false);

export const UserLogout = async () => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('User.logout ');
  }
  if (isLoggedIn) {
    // this.set('isLoggedIn', false.toString());
    setIsLoggedIn(false);
    sessionApi.logout;

    // ログアウト処理
    // 他に必要な処理があるのならこちら
  }
};
