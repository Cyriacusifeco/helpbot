

import './Admin.css'


export default function Admin() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">

          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >

            <h5 className="logo p-0">
              LOGO
            </h5>
            <div className="position-sticky pt-3 mr-4">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <span data-feather="home" />
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="file" />
                    Bot
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="shopping-cart" />
                    API
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="users" />
                    Intergration
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span data-feather="bar-chart-2" />
                    Reports
                  </a>
                </li>

                <hr />

                <div className='side-menu-bottom'>
                  <li className="nav-item">
                    <a className="nav-link nav-bottom" href="#">
                      <span data-feather="layers" />
                      Notification
                    </a>
                  </li>
                  <li className="nav-item nav-bottom">
                    <a className="nav-link" href="#">
                      <span data-feather="layers" />
                      Customer care
                    </a>
                  </li>
                  <li className="nav-item nav-bottom">
                    <a className="nav-link" href="#">
                      <span data-feather="layers" />
                      Settings
                    </a>
                  </li>
                </div>
              </ul>

            </div>
          </nav>

        </div>

      </div>


    </>
  )
}