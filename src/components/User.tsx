import { sessionApi } from '../components/sessionApi';
// import { useState } from 'react';
import Cookies from 'js-cookie';

class User {
  isLoggedIn = () => Cookies.get('isLoggedIn') === 'true';

  set = (key: string, value: string) => Cookies.set(key, value);
  get = (key: string) => Cookies.get(key);

  // getLocalStorage = (key: string) => {
  //   const ret = localStorage.getItem(key);
  //   if (ret) {
  //     return ret;
  //   }
  //   return null;
  // };

  login = async (email: string, password: string) => {
    console.log(email);
    console.log(password);

    await sessionApi.login({ email, password });

    console.log('isLoggedIn(User.tsxログイン処理後):' + this.isLoggedIn());
    console.log('this.get(User.tsx):', this.get('isLoggedIn'));

    return true;
  };

  logout = async () => {
    console.log('User.logout ');

    if (this.isLoggedIn()) {
      this.set('isLoggedIn', false.toString());
      sessionApi.logout;

      // ログアウト処理
      // 他に必要な処理があるのならこちら
    }
  };
}

export default new User();
