import { Link } from 'react-router-dom';
import '../App/App.css'
import './Signup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'




export default function Signup() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-sm-6 p-3 d-none  d-sm-block'>
          <img src="src/assets/2.jpeg" alt="" className='img-fluid image' />
        </div>
        <div className='col-md-6 log-in p-3'>
          <div className="logo-container">
            <a href="#">LOGO</a>
          </div>
          <h3>Log In</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit </p>
          <div className="mb-3">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email address" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Password" />
          </div>
          <div className="mb-3">
            <button className='active'><FontAwesomeIcon icon={faEnvelope} /> Log In</button>
          </div>
          <hr />
          <div className="mb-2">
            <button className='inactive'>Log In with Google</button>
          </div>
          <div className="mb-2">
            <button className='inactive'><FontAwesomeIcon icon={faEnvelope} /> Log in with Apple</button>
          </div>
          <p>Forgot your password</p>
          <p>Don&apos;t have an account <Link to="/SignUp">Sign Up</Link></p>
        </div>

      </div>

    </div>
  )
}