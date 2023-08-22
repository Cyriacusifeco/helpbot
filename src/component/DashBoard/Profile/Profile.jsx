import { Col } from 'react-bootstrap';
import './Profile.css';
import userimg from '../../../assets/user.svg';
import { useAppContext } from '../../../context';
const Profile = () => {
  const {
    state: {
      user: { name, email, img },
    },
  } = useAppContext();

  return (
    <Col md={5} className="mx-auto">
      <div className="profile">
        <h2>Profile</h2>
        <div className="profileInfo">
          <img src={img ? img : userimg} alt="" />
          <h3>{name}</h3>
          <h5>{email}</h5>
          <button className="mainBtn mt-3">Log out</button>
        </div>
      </div>
    </Col>
  );
};

export default Profile;
