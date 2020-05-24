import * as React from "react";
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { ZeitSample } from './pages/zeit-sample';

import { BrowserRouter, Route, Link } from 'react-router-dom'

export const HomePage = () => (
  <BrowserRouter>
      <div>
          <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/profile'>Profile</Link></li>
          <li><Link to='/zeit-sample'>zeit-sample</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/zeit-sample' component={ZeitSample} />
      </div>
  </BrowserRouter>
)
