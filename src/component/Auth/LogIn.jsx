import './Signup.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import Login from '../../assets/login.svg';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from '../../context/app-context';

const LogIn = () => {
  const { state, dispatch } = useAuthContext();

  const handleLogin = () => {
    const user = { id: 1, name: '' };
    dispatch({ type: 'LOGIN', payload: { user } });
  };
  // const handleLogout = () => {
  //   dispatch({ type: 'LOGOUT' });
  // };
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
          <img src={Login} alt="Welcome" className="img-fluid image" />
        </div>
        <div className="col-md-6 log-in p-3">
          <form className="sign-in-form">
            <h2 className="title">
              Welcome back!{' '}
              {state.user ? state.user.name : 'User not logged in'}
            </h2>

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
            <Link to="/dashboard/create-bot/onboarding">
              <input
                onClick={handleLogin}
                className="btn btn-3 text-white"
                type="submit"
                value="Login"
              />
            </Link>
            <p className="social-text">
              Do not have an account yet? <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
