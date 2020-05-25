import * as React from "react";
import HomePage from '../HomePage';
import  { useState } from 'react';
import { Text } from '../Text';
import { ZeitBtn } from '../ZeitBtn';
import { ZeitToast } from '../ZeitToast';
import { SiteImage } from '../SiteImage';
// import './App.scss'
// import { ZeitProvider, CssBaseline } from '@zeit-ui/react'

// export function ZeitSample() {
//   return(
//     <ZeitProvider>
//       <CssBaseline />
//       <HomePage />
//     </ZeitProvider>
//   )
// }

export function ZeitSample() {
  const [text, setText] = useState('');

  return (
    <div>
      <h1>
        <Text text={text} />
        入力して下さい
      </h1>
      <ZeitBtn />
      <SiteImage />
      <ZeitToast />
      <input
        type="text"
        value={text}
        onChange={e => {
          setText(e.target.value);
        }}
      />
    </div>
  );
}
