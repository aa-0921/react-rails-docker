import * as React from "react";
import { Home } from './views/Home';
import { Profile } from './views/Profile';
import { ZeitSample } from './views/zeit-sample';
import { Layout } from './views/layouts/layout'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Header } from './views/layouts/header'

export const HomePage = () => (
  <BrowserRouter>
    <Layout>
        <div>
            {/* <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/profile'>Profile</Link></li>
              <li><Link to='/zeit-sample'>zeit-sample</Link></li>
            </ul>

            <hr /> */}
            <Header />
            <Route exact path='/' component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/zeit-sample' component={ZeitSample} />
          </div>
    </Layout>
  </BrowserRouter>
)
