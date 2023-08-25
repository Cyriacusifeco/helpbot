import './Dashboard.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from './Profile/Profile';
import SideBar from './SideBar/Sidebar';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Dashboard = () => {
  const [sideToggle, setSideToggle] = useState(false);
  const [setTitle] = useState('HelpBot');

  return (
    <div id="dashboard">
      <div id="sidebar" className={sideToggle ? 'active' : ''}>
        <div className="sidebarContent">
          <SideBar setTitle={setTitle} />
          <div className="backBtnBox">
            <Link to="/">
              <button className="backBtn">
                <FontAwesomeIcon icon={faSignOutAlt} />
                back to home
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
          </div>
        </div>
        <Profile />
        {/* {
            admin ? <AdminDashboard /> : <UserDashboard />
        } */}
      </div>
    </div>
  );
};
export default Dashboard;
