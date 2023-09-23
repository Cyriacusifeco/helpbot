import './Signup.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

const LogIn = () => {
  // const { state, dispatch } = useAuthContext();

  // const handleLogin = () => {
  //   const user = { id: 1, name: '' };
  //   dispatch({ type: 'LOGIN', payload: { user } });
  // };
  // const handleLogout = () => {
  //   dispatch({ type: 'LOGOUT' });
  // };
  const navigate = useNavigate();
  const url = 'http://localhost:3000/api/users_search'
  const url2 = 'http://localhost:3000/api/check_passwd'
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async () => {
    const password = { password: formData.password }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        if (responseData[0]) {
          password.hashpassword = responseData[0].password;
          const userId = responseData[0]._id;
          Cookies.set('userId', userId, { expires: 7 });    
        try {
          const response2 = await fetch(url2, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(password),
          })
          if (response2.ok) {
            const responseDat = await response2.json();
            const matches= responseDat.matches;
            Cookies.set('logIn', matches, { expires: 7 });
            if (matches) {
              navigate('/dashboard/create-bot/onboarding')
            }
            else {
              console.log('failed to Log in')
            }
          } else {
            console.error('Failed to submit the form.');
          }        
        }
        catch(error){
          console.error('An error occurred:', error);
        }
      } else {
        console.error('failed to Log in')
      }
      }
    } catch(error) {
      console.error('An error occurred:', error);
    }
  };

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
          <form className="sign-in-form" action="#" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="title">
              Welcome back!{' '}
              {/* {state.user ? state.user.name : 'User not logged in'} */}
            </h2>

            <p className="subtitle">Please enter your credentials</p>

            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="password"
                value={formData.password}
                placeholder="Password"
                onChange={handleChange}
                required
              />
            </div>
            <button className="btn btn-3 text-white" type="submit">Login</button>
            {/* <Link to="/dashboard/create-bot/onboarding">
              <input
                onClick={handleLogin}
                className="btn btn-3 text-white"
                onChange={handleChange}
                type="submit"
                value="Login"
              />
            </Link> */}
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
