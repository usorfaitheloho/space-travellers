import { NavLink } from 'react-router-dom';
import './header.scss';

export default function Header() {
  return (
    <>
      <nav>
        <div className="logo">
          Logo here
        </div>
        <ul>
          <li>
            <NavLink to="/rocket" exact="true">Rocket</NavLink>
          </li>
          <li>
            <NavLink to="/mission" exact="true">Mission</NavLink>
          </li>
          <li>
            <span />
            <NavLink to="/profile" exact="true">My Profile</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
    </>

  );
}
