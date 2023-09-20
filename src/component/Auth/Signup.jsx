import '../App/App.css';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Signup = () => {
  const {
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegistration = async () => {
	  console.log('handleRegistration called');
    const userData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        // Registration successful, you can handle the response here
        const responseData = await response.json();
        // Capture the user_id or perform any necessary actions
        // Navigate or show a success message as needed
        navigate('/signup/account-info');
      } else {
        // Handle registration failure (e.g., show an error message)
        console.error('Registration failed');
      }
    } catch (error) {
      // Handle network errors or other exceptions
      console.error('An error occurred:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
	  console.log('handleSubmit called');
    handleRegistration();
    // navigate('/signup/account-info');
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
          <form method="POST" onSubmit={handleSubmit}>
            <h2 className="title">Create a free account</h2>
            <p className="subtitle">It is quick and easy.</p>
            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                placeholder="Username"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Email"
                onChange={handleChange}
                required
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
                id="password"
                name="password"
                value={formData.password}
                placeholder="Enter password"
                onChange={handleChange}
                required
                type="password"
              />
            </div>
            <Link to="/signup/account-info">
              <input className="btn-3" type="submit" value="Continue" />
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
