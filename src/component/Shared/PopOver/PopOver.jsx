import { useState } from 'react';
import { Button, Overlay } from 'react-bootstrap';
import Popover from 'react-bootstrap/Popover';
import './PopOver.css';
import img from '../../../assets/user.svg';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';
// import toast from 'react-hot-toast';
// import { SET_USER, useAuthContext } from '../../../context';

const PopOver = () => {
  // const {
  //   state: {
  //     user: { username, businessName, email },
  //   },
  //   dispatch,
  // } = useAuthContext();

  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  //Popover click
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  //Signout handling logic
  // const handleSignOut = () => {
  //   const signedOutUser = {
  //     isSignedIn: false,
  //     username: '',
  //     email: '',
  //   };
  //   return signedOutUser;
  // };
  // signout logic
  // const signOut = () => {
  //   const loading = toast.loading('Please wait...');
  //   handleSignOut().then((res) => {
  //     toast.dismiss(loading);
  //     console.log(res);
  //     dispatch({ type: SET_USER, payload: res });
  //     toast.error('Logged Out!');
  //   });
  // };

  return (
    <div>
      <div className="flexx" onClick={handleClick}>
        <img src={img} alt="" className="popImg" />
        <h5 className="BusinessName centerr">
          {/*`${businessName}`*/}shopNana{' '}
          <span>
            <FontAwesomeIcon icon={faSortDown}></FontAwesomeIcon>
          </span>
        </h5>
      </div>

      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={50}
      >
        <Popover id="popover-contained">
          <div className="text-center">
            <img src={img} alt="" className="popImg" />
            <p className="userName">{/*`${username}`*/} Charly</p>
            <p className="userEmail">{/*email*/} ibot@gmail.com</p>
            <Button variant="outline-danger" size="sm">
              Log out
            </Button>
          </div>
        </Popover>
      </Overlay>
    </div>
  );
};

export default PopOver;
