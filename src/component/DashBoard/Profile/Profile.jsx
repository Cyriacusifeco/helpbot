import { Col } from 'react-bootstrap';
import './Profile.css';
import userimg from '../../../assets/user.svg';
import { useState } from 'react';
import ProfileUpdateForm from './ProfileUpdateForm';

const Profile = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <Col md={5} className="mx-auto">
      <div className="profile">
        <h2>Profile</h2>
        <div className="profileInfo">
          <img src={userimg} alt="" />
<<<<<<< HEAD
          <h4>Business Name</h4>
          <h5>Website </h5>
          <h5>Username</h5>
          <h5>Email Address</h5>
          <h5>Website </h5>
=======
          <h3>Business Name</h3>
          <h5>Username</h5>
          <h5>Email Address</h5>
          <h5>Website url</h5>
>>>>>>> 94e56a626a050d6b90cf00c79ebc6454f7138216
          <h5>Industry</h5>
          <button className="mainBtn mt-3" onClick={toggleFormVisibility}>
            Update Profile
          </button>
        </div>
      </div>
      {/* conditionally render the profile update form */}
      {isFormVisible && <ProfileUpdateForm />}
    </Col>
  );
};

export default Profile;
