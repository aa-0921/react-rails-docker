import * as React from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <h5>Header</h5>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Pickup</Link>
        </li>
        <li>
          <Link to="/zeit-sample">Feed</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <hr />
    </header>
  );
}
