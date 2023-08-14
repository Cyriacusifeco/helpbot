import './NavBar.css';
import React from 'react';
import Logo from '../../../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  // Checks if the current location is the dashboard page
  const isDashboardPage = location.pathname.includes('/dashboard');

  //Conditionally render the navbar only if not on the dashboard page
  if (isDashboardPage) {
    return null;
  }

  return (
    <div className="navbar fixed-top navbar-expand-lg border-bottom border-body m-3">
      <div className="container-fluid">
        <div className="nav-container">
          <Link className="brand-logo" href="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <button
          className="nav-bar-toggle"
          aria-controls="navBarText"
          type="button"
          aria-label="Toggle navigation"
          data-bs-toggle="collapse"
          data-bs-target="#navBarText"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <span className="navbar-btn">
            <button className="btn-1" type="submit">
              Try Demo
            </button>
            <button className="btn-2" type="submit">
              Get Started
            </button>
          </span>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
