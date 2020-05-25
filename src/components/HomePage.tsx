import * as React from "react";
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { ZeitSample } from '../pages/zeit-sample';
// import { Layout } from './layout'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Header } from './header'

export const HomePage = () => (
  <BrowserRouter>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={Profile} />
      <Route path='/zeit-sample' component={ZeitSample} />
  </BrowserRouter>
)
const styles = {
    header: {
        height: 100,
        background: "#ddd",
    },
    main: {
        height: 200,
    },
    footer: {
        height: 100,
        background: "#ddd",
    }
}
