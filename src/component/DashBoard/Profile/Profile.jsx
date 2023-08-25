import { Col } from 'react-bootstrap';
import './Profile.css';
import userimg from '../../../assets/user.svg';
//

const Profile = () => {
  //   const {
  //     state: {
  //       user: { name, email },
  //     },
  //   } = useAppContext();

  return (
    <Col md={5} className="mx-auto">
      <div className="profile">
        <h2>Profile</h2>
        <div className="profileInfo">
          <img src={userimg} alt="" />
          <h3>Business Name</h3>
          <h5>Email Address</h5>
          <h5>Phone number</h5>
          <button className="mainBtn mt-3">Update Profile</button>
        </div>
      </div>
    </Col>
  );
};

export default Profile;
