import { Col } from 'react-bootstrap';
import './Bot.css';
import userimg from '../../../../assets/user.svg';
import { useState } from 'react';

const Bot = () => {
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
          <h3>Business Name</h3>
          <button className="mainBtn mt-3" onClick={toggleFormVisibility}>
            Update Profile
          </button>
        </div>
      </div>
      {/* conditionally render the profile update form */}
      {/* {isFormVisible && <ProfileUpdateForm />} */}
    </Col>
  );
};

export default Bot;
