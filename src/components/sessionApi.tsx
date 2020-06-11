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
    fetch('/users/sign_in', {
      method: 'POST',
      body: JSON.stringify(loginFormData),
    }).then((response) => {
      console.log('success');

      return response;
    });
  },
  logout: () => {
    fetch('/users/sign_out', {
      method: 'DELETE',
    }).then((response) => {
      console.log('success');

      return response;
    });
  },
};
