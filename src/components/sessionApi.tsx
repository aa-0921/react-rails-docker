type LoginParams = {
  email: string;
  password: string;
};
export const sessionApi = {
  login: ({ email, password }: LoginParams) => {
    const loginFormData = {
      user: {
        email: email,
        password: password,
        remember_me: 1,
      },
    };
    // user_session POST
    // /api/v1/auth/sign_in(.: format)
    // devise_token_auth / sessions#create
    fetch('api/v1/auth/sign_in', {
      method: 'POST',
      body: JSON.stringify(loginFormData),
    }).then((response) => {
      console.log('success');

      return response;
    });
  },
  logout: () => {
    fetch('api/v1/auth/sign_out', {
      method: 'DELETE',
    }).then((response) => {
      console.log('success');

      return response;
    });
  },
};
