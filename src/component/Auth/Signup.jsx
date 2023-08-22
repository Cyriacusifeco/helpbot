import '../App/App.css';
import './Signup.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const {
    register,
    handleSubmit,
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
          <form onSubmit={handleSubmit} className="sign-up-form">
            <h2 className="title">Sign Up</h2>
            <p className="subtitle">It is quick and easy.</p>
            <div className="input-field">
              <span className="fIcon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                placeholder="Name"
                {...register('name', { required: true })}
              />
            </div>
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
            <input className="iBtn" type="submit" value="sign Up" />
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

//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-sm-6 p-3 d-none  d-sm-block">
//           <img src="src/assets/2.jpeg" alt="" className="img-fluid image" />
//         </div>
//         <div className="col-md-6 log-in p-3">
//           <div className="logo-container">
//             <a href="#">LOGO</a>
//           </div>
//           <h3>Sign Up</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
//           <p>Lorem ipsum dolor sit amet. </p>
//           <div className="mb-3">
//             <input
//               type="email"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="Email address"
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="email"
//               className="form-control"
//               id="exampleFormControlInput1"
//               placeholder="Password"
//             />
//           </div>
//           <div className="mb-3">
//             <button className="active">
//               <FontAwesomeIcon icon={faEnvelope} /> Sign Up
//             </button>
//           </div>
//           <hr />
//           <div className="mb-2">
//             <button className="inactive">Sign up with Google</button>
//           </div>
//           <div className="mb-2">
//             <button className="inactive">
//               <FontAwesomeIcon icon={faEnvelope} /> Sign Up with Apple
//             </button>
//           </div>
//           <p>
//             Already have an account? <Link to="/LogIn">Log In</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
