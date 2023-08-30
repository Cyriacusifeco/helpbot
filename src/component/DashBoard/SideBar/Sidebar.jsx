/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';
import Logo from '../../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div>
      <div className="sideBrand">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <nav id="sideNavbar">
        <ul>
          <li>
            <NavLink activeclassname="activePage" exact to="/dashboard/profile">
              <FontAwesomeIcon icon={faUserCircle} className="iconC" />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink>
              <FontAwesomeIcon icon={faUserCircle} className="iconC" />
              Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
