import * as React from 'react';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { ZeitSample } from '../pages/zeit-sample';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';

// style: {
//     height: number;
//     background: string;
// }

// const styles = {
//   header: {
//     height: 100,
//     background: '#0000000',
//   },
//   // main: {
//   //   height: 200,
//   // },
//   footer: {
//     height: 100,
//     background: '#1111111',
//   },
// };

export const HomePage = () => (
  <BrowserRouter>
    {/* <Header style={styles.header} /> */}
    <Header />
    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/zeit-sample" component={ZeitSample} />
    <Footer />
    {/* <Footer style={styles.header} /> */}
  </BrowserRouter>
);
