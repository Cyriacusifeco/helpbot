/* eslint-disable react/prop-types */
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';
import Logo from '../../../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserCircle,
  faRobot,
  faInbox,
} from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from '../../../context';

const Sidebar = ({ setTitle }) => {
  const {
    state: { user },
  } = useAuthContext();

  return (
    <div>
      <div className="sideBrand">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <nav id="sideNavbar">
        <ul>
          {user ? (
            <>
              <li>
                <NavLink
                  onClick={() => setTitle('Profile')}
                  activeclassname="activePage"
                  exact
                  to="/dashboard/profile"
                >
                  <FontAwesomeIcon icon={faUserCircle} className="iconC" />
                  Profile
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  onClick={() => setTitle('Bots')}
                  activeclassname="activePage"
                  exact
                  to="/dashboard/chatbot"
                >
                  <FontAwesomeIcon icon={faRobot} className="iconC" />
                  Chatbots
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setTitle('Conversations')}
                  activeclassname="activePage"
                  exact
                  to="/dashboard/inbox"
                >
                  <FontAwesomeIcon icon={faInbox} className="iconC" />
                  Inbox
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={() => setTitle('Profile')}
                  activeclassname="activePage"
                  exact
                  to="/dashboard/profile"
                >
                  <FontAwesomeIcon icon={faUserCircle} className="iconC" />
                  Profile
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};
export default Sidebar;
