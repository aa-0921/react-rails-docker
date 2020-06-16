require('dotenv').config();

import User from './User';

type RejistrationParams = {
  email: string;
  password: string;
  password_confirmation: string;
  name: string;
};

export const registrationApiSignup = ({
  email,
  password,
  password_confirmation,
  name,
}: RejistrationParams) => {
  const registrationFormData = {
    user: {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    },
  };
  const signupUrl: string = process.env.REACT_APP_API_URL!;

  fetch(signupUrl, {
    method: 'POST',
    body: JSON.stringify(registrationFormData),
  })
    .then((response) => {
      if (response.status == 200) {
        User.set('isLoggedIn', 'true');
        if (process.env.NODE_ENV !== 'production') {
          console.log('isLoggedIn(registrationApiSignup.tsx):', User.isLoggedIn());
        }
      } else {
        User.set('isLoggedIn', 'false');
        if (process.env.NODE_ENV !== 'production') {
          console.log('isLoggedIn(else後):', User.isLoggedIn());
        }

        throw new Error();
      }
    })
    .catch((error) => {
      User.set('isLoggedIn', 'false');
      if (process.env.NODE_ENV !== 'production') {
        console.log('isLoggedIn(catch後):', User.isLoggedIn());
        console.log('errorの内容', JSON.stringify(error.json));
      }
    });
};
