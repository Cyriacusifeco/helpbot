import '../App/App.css';
import './Signup.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faLock,
  faLink,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6 p-3 d-none  d-sm-block">
          <div className="logo-container">
            <a href="/">
              <img src={Logo} />
            </a>
          </div>
          <img src="src/assets/2.jpeg" alt="" className="img-fluid image" />
        </div>
        <div className="col-md-6 log-in p-3">
          <form method="POST" action="/account-info" className="sign-up-form">
            <h2 className="title">Create a free account</h2>
            <p className="subtitle">It is quick and easy.</p>
            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                placeholder="Username"
                required
                {...register('username')}
              />
            </div>
            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                placeholder="Email"
                type="email"
                {...register('email', { required: true })}
              />
            </div>
            {errors.email && (
              <span className="text-warning">This field is required</span>
            )}
            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faLink} />
              </span>
              <input
                placeholder="Website"
                type="url"
                {...register('website', { required: true })}
              />
            </div>
            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                placeholder="Password"
                required
                {...register('password')}
              />
            </div>
            <Link to="/account-info">
              <input className="iBtn" type="submit" value="sign up" />
            </Link>
            <p className="social-text">
              Already have an account? <Link to="/LogIn">Log In</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
