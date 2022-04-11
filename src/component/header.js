import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav>
      {/*    <img src="./image/logo.png" alt="logo" /> */}
      <ul className="navLink">
        <li className="navItem">
          <Link to="/">
            <span>Rockets</span>
          </Link>
        </li>

        <li className="navItem">
          <Link to="/calculator">Mission</Link>
        </li>
        <span>|</span>
        <li className="navItem">
          <Link to="/quote">MyProfile</Link>
        </li>
      </ul>
    </nav>
  );
}
