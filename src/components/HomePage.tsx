import * as React from 'react';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { ZeitSample } from '../pages/zeit-sample';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Header } from './header';
import { Footer } from './footer';
import { About } from '../pages/About';

// import './tailwind.css';

export const HomePage = () => (
  <BrowserRouter>
    {/* <Header style={styles.header} /> */}
    {/* <Header /> */}
    <header style={{ height: 100, background: '#ddd' }}>head</header>

    <Route exact path="/" component={Home} />
    <Route path="/profile" component={Profile} />
    <Route path="/zeit-sample" component={ZeitSample} />
    <Route path="/about" component={About} />

    <Footer />
    {/* <Footer style={styles.header} /> */}
  </BrowserRouter>
);
