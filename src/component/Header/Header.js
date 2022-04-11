import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav>
      <ul className="navLink">
        <img src="./image/logo.png" alt="logo" />
        <li className="navItem">
          <Link to="/">
            <span>Rockets</span>
          </Link>
        </li>

        <li className="navItem">
          <Link to="/Mission">Mission</Link>
        </li>
        <span>|</span>
        <li className="navItem">
          <Link to="/Myprofile">MyProfile</Link>
        </li>
      </ul>
    </nav>
  );
}
