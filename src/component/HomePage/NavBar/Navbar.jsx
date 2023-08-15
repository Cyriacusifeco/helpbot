import './NavBar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Logo from '../../../assets/logo.svg';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    });
  }, []);

  // Checks if the current location is the dashboard page
  const isDashboardPage = location.pathname.includes('/dashboard');

  //Conditionally render the navbar only if not on the dashboard page
  if (isDashboardPage) {
    return null;
  }

  const scrollTop = () => window['scrollTo']({ top: 0, behavior: 'smooth' });
  return (
    <Navbar
      className={`navbar navbar-expand-lg navbar-light ${
        isSticky ? 'navStyle' : 'navDefault'
      }`}
      expand="lg"
    >
      <Container>
        <a href="/" onClick={scrollTop} className="navBrn">
          <img src={Logo} alt="Logo" />
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto mainNav" activeKey="/home">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/"
                className="nav-link"
                onClick={() =>
                  window['scrollTo']({ top: 0, behavior: 'smooth' })
                }
              >
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#about" className="nav-link">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#features" className="nav-link">
                Features
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact" className="nav-link">
                Contact Us
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <div className="nav-btns">
                <Link to="/dashboard">
                  <button className="btn-1" type="submit">
                    Try Demo
                  </button>
                </Link>
                <Link to="/login">
                  <button className="btn-2">Get Started</button>
                </Link>
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
{
  /* <div className="navbar navDefault fixed-top navbar-expand-lg">
  <div className="container-fluid nav-container">
    <Link className="nav-logo" href="/">
      <img src={Logo} alt="Logo" />
    </Link>
    {/* <button
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
    <nav className="mainNav" id="navbarText" activeKey="/home">
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
    </nav>
  </div>
</div>; */
}
