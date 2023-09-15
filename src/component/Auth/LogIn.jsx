import './Signup.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useAuthContext } from '../../context/app-context';

const LogIn = () => {
  const { state, dispatch } = useAuthContext();

  const handleLogin = () => {
<<<<<<< HEAD
    const user = { id: 1, name: '' };
    dispatch({ type: 'LOGIN', payload: { user } });
  };
  // const handleLogout = () => {
=======
    const user = { id: 1, name: 'John' };
    dispatch({ type: 'LOGIN', payload: { user } });
  };
  // const handleLogout = () => {
  //   // Simulate a logout action
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216
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
          <img src="src/assets/2.jpeg" alt="" className="img-fluid image" />
        </div>
        <div className="col-md-6 log-in p-3">
          <form className="sign-in-form">
<<<<<<< HEAD
            <h2 className="title">
              Welcome back!{' '}
              {state.user ? state.user.name : 'User not logged in'}
            </h2>

=======
            <h2>
              Welcome back! {state.user ? state.user.name : 'Not logged in'}{' '}
            </h2>
            {/* <h2 className="title">Welcome back! { state.user ? state.user.name } </h2> */}
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216
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
            <Link to="/dashboard">
              <input
                onClick={handleLogin}
                className="iBtn"
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
