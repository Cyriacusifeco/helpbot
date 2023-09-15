import './Dashboard.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useState } from 'react';
<<<<<<< HEAD
import UserDashboard from './UserDashboard/UserDashboard';
import SideBar from './SideBar/Sidebar';
import { faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PopOver from '../Shared/PopOver/PopOver';
=======
// import Profile from './Profile/Profile';
import UserDashboard from './UserDashboard/UserDashboard';
import SideBar from './SideBar/Sidebar';
// import Bot from './UserDashboard/Bots/Bot';
import { faSignOutAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216
// import { useAuthContext } from '../../context';

const Dashboard = () => {
  const [sideToggle, setSideToggle] = useState(false);
  const [title, setTitle] = useState('HelpBot');
  // const { state: user, admin } = useAuthContext();
  // const [displayBot, setDisplayBot] = useState(true);

  // Function to toggle between Bot and UserDashboard
  // const toggleDisplay = () => {
  //   setDisplayBot(!displayBot);
  // };

  return (
    <div id="dashboard">
      <div id="sidebar" className={sideToggle ? 'active' : ''}>
        <div className="sidebarContent">
          <SideBar setTitle={setTitle} />
          <div className="backBtnBox">
            <Link to="/">
              <button className="backBtn">
                <FontAwesomeIcon icon={faSignOutAlt} />
                Back to home
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div id="pageContent">
        <div className="dashBoardHeader">
          <div className="d-flex align-items-center">
            <div
              id="nav-icon"
              className={sideToggle ? 'menu-btn' : 'menu-btn open'}
              onClick={() => setSideToggle(!sideToggle)}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <h3>{title}</h3>
          </div>
<<<<<<< HEAD
          <PopOver />
        </div>
        <div className="bot-btn btn-1">
          <Link to="/dashboard/create-bot/onboarding" className="bot-flex">
            <FontAwesomeIcon className="bot-icon" icon={faPlus} />
            Create Bot
          </Link>
        </div>

=======
          <div className="bot-btn btn-1">
            <a
              href="/dashboard/onboarding/step-1-orientation"
              className="bot-flex"
            >
              <FontAwesomeIcon className="bot-icon" icon={faPlus} />
              Create Bot
            </a>
          </div>
        </div>
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216
        {/* <button onClick={toggleDisplay}>Toggle Display</button> */}
        <UserDashboard />
      </div>
    </div>
  );
};
export default Dashboard;
