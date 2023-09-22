import  { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser, faLink } from '@fortawesome/free-solid-svg-icons';

const AcctInfo = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const url = 'http://localhost:3000/api/business/register';

  const [formData, setFormData] = useState({
    business_name: '',
    business_email: '',
    industry: '', // Add the industry field
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Define onSubmit function
  const onSubmit = async () => {
    const user_id = Cookies.get('userId');
    formData.user_id = user_id;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        const businessId = responseData._id;
        Cookies.set('businessId', businessId, { expires: 7 });
        navigate('/dashboard/create-bot/onboarding');
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
          <div className="col-sm-6 p-3 d-none d-sm-block">
            <div className="logo-container">
              <a href="/">
                <img src={Logo} alt="logo" />
              </a>
            </div>
            <img
              src="../../../src/assets/2.jpeg"
              alt="pic"
              className="img-fluid image"
            />
          </div>
          <div className="col-md-6 log-in p-3">
            <form
              method="POST"
              action="/dashboard/create-bot/onboarding"
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
                  name="business_name"
                  onChange={handleChange}
                  required
                  placeholder="Business Name"
                />
              </div>
              <div className="input-field">
                <span className="fIcon">
                  <FontAwesomeIcon icon={faLink} />
                </span>
                <input
                  type="url"
                  id="website"
                  name="business_email"
                  required
                  onChange={handleChange}
                  placeholder="Website"
                />
                {errors.website && (
                  <span className="text-danger">
                    This field must contain a URL
                  </span>
                )}
              </div>
              <div className="input-field">
                <span className="fIcon">
                  <FontAwesomeIcon icon={faBuilding} />
                </span>
                <select  name="industry">
                  <option disabled selected value="">
                    Select an option
                  </option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Beauty and Skincare">Beauty and Skincare</option>
                  <option value="Clothing and Apparel">Clothing and Apparel</option>
                  <option value="Finance">Finance</option>
                  <option value="Automobile">Automobile</option>
                  <option value="Gadgets and Electronics">Gadgets and Electronics</option>
                </select>
              </div>
              <button className="btn-3 btn text-white" type="submit">Sign Up</button>
              <p className="social-text">
                Already have an account? <Link to="/LogIn">Log In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcctInfo;
