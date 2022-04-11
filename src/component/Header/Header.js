import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
  <header className="header">
    <div className="left-header">
      <h1 className="logo">
        <img src="../Header/image/logo.png" alt="logo" />
      </h1>
      <nav className="navigation">
        <h2>Space Traveler's Hub</h2>
      </nav>
    </div>
    <div className="right-header">
      <li>
        <Link to="/">Rockets</Link>
      </li>
      <li>
        <Link to="/mission">Mission</Link>
      </li>
      <span>|</span>
      <li>
        <Link to="/profile">MyProfile</Link>
      </li>
    </div>
  </header>
);
export default Header;
