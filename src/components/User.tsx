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
    // set = (key: string, value: string) => localStorage.setItem(key, value);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    };

    return fetch(`/api/v1/auth/sign_in`, requestOptions)
      .then(handleResponse)
      .then((user) => {
        // login successful if there's a user in the response
        if (user) {
          // store user details and basic auth credentials in local storage
          // to keep user logged in between page refreshes
          user.authdata = window.btoa(username + ':' + password);
          localStorage.setItem('user', JSON.stringify(user));
        }
        // this.set('isLoggedIn', true.toString());

        // return true;
        return user;
      });
  };

  logout = async () => {
    if (this.isLoggedIn()) {
      this.set('isLoggedIn', false.toString());

      // ログアウト処理
      // 他に必要な処理があるのならこちら
    }
  };
}

export default new User();
