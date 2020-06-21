import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
export const MemberInfo = () => {
  function Show({ match }: { match: any }) {
    let params = match.params;
    return (
      <div>
        UserName,Email is
        <div>
          <strong>{params.id}</strong>
        </div>
      </div>
    );
  }
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">UserName1</Link>
            </li>
            <li>
              <Link to="/post/2">UserName2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/post/:id" component={Show} />
          <Route path="/"></Route>
        </Switch>
      </div>
    </Router>
  );
};
