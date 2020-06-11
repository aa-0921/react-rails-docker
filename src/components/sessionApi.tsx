type LoginParams = {
  email: string;
  password: string;
};
// const loginUrl: string = process.env.REACT_APP_API_URL_SIGN_IN!;
// const logoutUrl: string = process.env.REACT_APP_API_URL_SIGN_OUT!;

export const sessionApi = {
  login: ({ email, password }: LoginParams) => {
    // const loginFormData = {
    //   user: {
    //     email: email,
    //     password: password,
    //     // remember_me: 1,
    //   },
    // };
    const obj = {
      email: email,
      password: password,
    };
    const method = 'POST';
    const body = JSON.stringify(obj);
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    // user_session POST
    // /api/v1/auth/sign_in(.: format)
    // devise_token_auth / sessions#create
    // console.log(loginUrl);

    fetch(
      'http://localhost:3000/api/v1/auth/sign_in',
      { method, headers, body },
      // fetch(logoutUrl, {
      // method: 'POST',
      // body: JSON.stringify(loginFormData),
    ).then((response) => {
      console.log('success');

      return response;
    });
  },
  logout: () => {
    fetch('http://localhost:3000/api/v1/auth/sign_out', {
      // fetch(logoutUrl, {
      method: 'DELETE',
    }).then((response) => {
      console.log('success');

      return response;
    });
  },
};