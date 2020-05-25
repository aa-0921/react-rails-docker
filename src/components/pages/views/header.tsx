import * as React from "react";
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/profile'>Profile</Link></li>
        <li><Link to='/zeit-sample'>zeit-sample</Link></li>
      </ul>

      <hr />
    </header>
  );
}
