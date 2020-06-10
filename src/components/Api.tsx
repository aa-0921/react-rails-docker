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

type RejistrationParams = {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
};
export const registrationApi = {
  signUp: ({ email, password, password_confirmation, name }: RejistrationParams) => {
    const registrationFormData = {
      user: {
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation,
      },
    };
    fetch('/users', {
      method: 'POST',
      body: JSON.stringify(registrationFormData),
    }).then((response) => {
      console.log('success');

      return response;
    });
  },
};
