import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Admin.css'


export default function Admin() {
  return (
    <>
      <div className='container'>
      <div className="sidebar">
        <div className="logo-details row">
          <i className="bx bxl-c-plus-plus" />
          <span className="logo_name">LOGO</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#" className="active">
              <i className="bx bx-grid-alt" />
              <span className="links_name">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-box" />
              <span className="links_name">Product</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-list-ul" />
              <span className="links_name">Order list</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2" />
              <span className="links_name">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-coin-stack" />
              <span className="links_name">Stock</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-book-alt" />
              <span className="links_name">Total order</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-user" />
              <span className="links_name">Team</span>
            </a>
          </li>
          
          <li>
            <a href="#">
              <i className="bx bx-heart" />
              <span className="links_name">Favrorites</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-cog" />
              <span className="links_name">Setting</span>
            </a>
          </li>
          <li className="log_out">
            <a href="#">
              <i className="bx bx-log-out" />
              <span className="links_name">Log out</span>
            </a>
          </li>
        </ul>
      </div>
      <section className="home-section">
          <Navbar bg="light" data-bs-theme="light">
            <Container>
              <Navbar.Brand href="#home">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        
            
          
        </section>
      </div>
    </>

  )
}