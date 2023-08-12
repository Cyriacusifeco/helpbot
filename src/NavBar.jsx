import './App.css';
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg border-bottom border-body m-3">
      <div className="container-fluid">
        <Link className="navbar-brand logo" to="/">LOGO</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/demo">Demo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">Features</Link>
            </li>
          </ul>
          <span className="navbar-text">
            <button className="btn-2 me-3" type="submit">
              Try demo
            </button>
            <button className="btn-1" type="submit">
              Get started
            </button>
          </span>
        </div>
      </div>
    </nav>
  );
}
