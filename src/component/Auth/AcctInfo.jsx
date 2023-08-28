import '../App/App.css';
import './Signup.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';

const AcctInfo = () => {
  const { register } = useForm();
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
          <form method="POST" action="/setup" className="sign-up-form">
            <h2 className="title">
              Tell us more, so we can personalize your experience
            </h2>
            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                type="text"
                placeholder="Business Name"
                required
                {...register('username')}
              />
            </div>
            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faBuilding} />
              </span>
              <select>
                Industry
                <option>Real Estate</option>
                <option>Beauty and Fashion</option>
                <option>Clothing and Apparel</option>
                <option>Finance</option>
                <option>Home services</option>
                <option>Automobile</option>
                <option>Gadgets and Electronics</option>
              </select>
            </div>
            <Link to="/dashboard">
              <input className="iBtn" type="submit" value="Continue" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AcctInfo;
