import './App.css'


export default function NavBar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg border-bottom border-body m-3">
        <div className="container-fluid">
          <a className="navbar-brand logo  " href="#">LOGO</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Demo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
            </ul>
            <span className="navbar-text">
              <button className="btn-2 me-3" type="submit">Try demo</button>
              <button className="btn-1" type="submit">Get started</button>
            </span>
          </div>
        </div>
      </nav>

    </>
  );
}

