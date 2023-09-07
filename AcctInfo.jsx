import '../App/App.css';
import './Signup.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser, faLink } from '@fortawesome/free-solid-svg-icons';

const AcctInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Define setIsRegSuccessful and initialize it as false
  const [isRegSuccessful, setIsRegSuccessful] = useState(false);

  //Sending POST requet to the /api/users endpoint
  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setIsRegSuccessful(true);
      } else {
        console.log('Registration failed');
      }
    } catch (errors) {
      console.log('Unable to create user:', errors);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-6 p-3 d-none  d-sm-block">
            <div className="logo-container">
              <a href="/">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <img src="src/assets/2.jpeg" alt="pic" className="img-fluid image" />
          </div>
          <div className="col-md-6 log-in p-3">
            <form
              method="POST"
              action="/setup"
              onSubmit={handleSubmit(onSubmit)}
              className="sign-up-form"
            >
              <h2 className="title">
                Tell us more, so we can personalize your experience
              </h2>
              <div className="input-field">
                <span className="fIcon">
                  <FontAwesomeIcon icon={faUser} />
                </span>
                <input
                  type="text"
                  id="business-name"
                  name="businessName"
                  required
                  placeholder="Business Name"
                  {...register('businessName')}
                />
              </div>
              <div className="input-field">
                <span className="fIcon">
                  <FontAwesomeIcon icon={faLink} />
                </span>
                <input
                  type="url"
                  id="website"
                  name="website"
                  required
                  placeholder="Website"
                  {...register('website')}
                />
                {errors.website && (
                  <span className="text-danger">
                    This field must contain a url
                  </span>
                )}
              </div>
              <div className="input-field">
                <span className="fIcon">
                  <FontAwesomeIcon icon={faBuilding} />
                </span>
                <select {...register('industry')} name="industry">
                  <option disabled selected value="">
                    Select an option
                  </option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Beauty and Skincare">
                    Beauty and Skincare
                  </option>
                  <option value="Clothing and Apparel">
                    Clothing and Apparel
                  </option>
                  <option value="Finance">Finance</option>
                  <option value="Automobile">Automobile</option>
                  <option value="Gadgets and Electronics">
                    Gadgets and Electronics
                  </option>
                </select>
              </div>
              <Link to="/dashboard">
                <input className="iBtn" type="submit" value="Sign Up" />
              </Link>
              <p className="social-text">
                Already have an account? <Link to="/LogIn">Log In</Link>
              </p>
            </form>
            {isRegSuccessful && (
              <div>
                <h5>Registration Successful</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default AcctInfo;
