import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './image/logo.png';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="left-header">
      <h1 className="logo">
        <img
          src={logo}
          alt="logo"
          style={{ height: '7vh', marginTop: '15px' }}
        />
      </h1>
      <nav className="navigation">
        <span>Space Travelers&apos; Hub</span>
      </nav>
    </div>
    <div className="right-header">
      <li>
        <NavLink to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink to="/mission">Mission</NavLink>
      </li>
      <li>
        <NavLink to="/dragons">Dragons</NavLink>
      </li>
      <span>|</span>
      <li>
        <NavLink to="/profile">MyProfile</NavLink>
      </li>
    </div>
  </header>
);
export default Header;
