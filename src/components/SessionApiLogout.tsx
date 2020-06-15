require('dotenv').config();

import * as React from 'react';

export const SessionApiLogout = async () => {
  const logoutUrl: string = process.env.REACT_APP_API_URL + '/sign_out';

  await fetch(logoutUrl, { method: 'DELETE' }).then((response) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('success');
      console.log('reaponse(sessionApi.login)');
      console.log(response);
    }
    const loginStatus = 'false';

    return loginStatus;
  });
};
