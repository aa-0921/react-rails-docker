export const sessionApi = {
  login: ({ email, password }) => {
    return axios
      .post('/users/sign_in', {
        user: {
          email: email,
          password: password,
          remember_me: 1,
        },
      })
      .then((response) => {
        console.log('success');
        updateCsrfToken(response.data.csrf_token);
        return response;
      });
  },
  logout: () => {
    return axios.delete('/users/sign_out').then((response) => {
      console.log('success');
      updateCsrfToken(response.data.csrf_token);
      return response;
    });
  },
};

export const registrationApi = {
  signUp: ({ email, password, password_confirmation, name }) => {
    return axios
      .post('/users', {
        user: {
          name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
        },
      })
      .then((response) => {
        console.log('success');
        updateCsrfToken(response.data.csrf_token);
        return response;
      });
  },
};
