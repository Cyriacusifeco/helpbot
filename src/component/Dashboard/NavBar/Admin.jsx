import { faBolt, faGaugeSimple, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Admin.css'


export default function Admin() {
  return (
    <>
      <div
        className="offcanvas offcanvas-start show text-bg-white canvas"
        tabIndex={-1}
        id="offcanvasDark"
        aria-labelledby="offcanvasDarkLabel"
        style={{ width: '180px' }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasDarkLabel">
            LOGO
          </h5>

        </div>
        <div className="offcanvas-body p-0  ">
          <div className='side-menu-nav pt-3 offcanvas-header'>
            <ul>
              <li className='side-menu'>
                <FontAwesomeIcon icon={faGaugeSimple} className='icon' /> <a href="#">Dashboard</a>
              </li>
              <li className='side-menu'>
                <FontAwesomeIcon icon={faBolt} className='icon' /> <a href="#">Bot</a>
              </li>
              <li className='side-menu'>
                <FontAwesomeIcon icon={faUser} className='icon' /> <a href="#">API</a>
              </li>
              <li className='side-menu'>
                <FontAwesomeIcon icon={faUser} className='icon' /><a href="#">Intergration</a>
              </li>
            </ul>
          </div>
          <hr />
          <div className='side-menu-nav offcanvas-header'>
            <div className='side-menu-bottom  mt-5'>
              <ul>
                <li className='side-menu-bottom'>
                  <FontAwesomeIcon icon={faGaugeSimple} className='side-menu-bottom-icon' /> <a href="#">Notification</a>
                </li>
                <li className='side-menu-bottom'>
                  <FontAwesomeIcon icon={faBolt} className='side-menu-bottom-icon' /> <a href="#">Customer care</a>
                </li>
                <li className='side-menu-bottom'>
                  <FontAwesomeIcon icon={faUser} className='side-menu-bottom-icon' /> <a href="#">Settings</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>




    </>

  )
}