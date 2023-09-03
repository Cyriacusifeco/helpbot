import './Dashboard.css';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import { useState } from 'react';
// import Profile from './Profile/Profile';
import UserDashboard from './UserDashboard/UserDashboard';
import SideBar from './SideBar/Sidebar';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => {
  const [sideToggle, setSideToggle] = useState(false);
  const [setTitle, title] = useState('HelpBot');

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
        </div>
        <UserDashboard />
      </div>
    </div>
  );
};
export default Dashboard;
