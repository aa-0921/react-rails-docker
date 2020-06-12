import { sessionApi } from '../components/sessionApi';

class User {
  isLoggedIn = () => this.get('isLoggedIn') === 'true';

  set = (key: string, value: string) => localStorage.setItem(key, value);

  get = (key: string) => this.getLocalStorage(key);

  getLocalStorage = (key: string) => {
    const ret = localStorage.getItem(key);
    if (ret) {
      return ret;
    }
    return null;
  };

  login = async (email: string, password: string) => {
    // ログイン処理
    // ログインエラー時には、falseを返してもいいし、returnを別の用途で利用したかったら
    // 例外を出しして呼び出し元でcatchしてもいいかと思います。

    console.log(email);
    console.log(password);
    this.set('isLoggedIn', true.toString());

    sessionApi.login({ email, password });

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
