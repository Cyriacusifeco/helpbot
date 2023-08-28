import './Signup.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const LogIn = () => {
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
          <form className="sign-in-form">
            <h2 className="title">Welcome back! </h2>
            <p className="subtitle">Please enter your credentials</p>

            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                placeholder="Email"
                {...register('email', { required: true })}
              />
            </div>
            {errors.email && (
              <span className="text-warning">This field is required</span>
            )}
            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                placeholder="Password"
                {...register('password', { required: true })}
              />
            </div>
            <Link to="/dasboard">
              <input className="iBtn" type="submit" value="Login" />
            </Link>
            <p className="social-text">
              Do not have an account yet? <Link to="/SignUp">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
