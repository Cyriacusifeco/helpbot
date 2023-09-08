import { Col } from 'react-bootstrap';
import './Chatbots.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

const Bot = () => {
  return (
    <>
      <div className="bots-container">
        <Col md={5} className="mx-auto">
          <div className="profile">
            <h3>Helpbot Chatbot</h3>
            <div className="profileInfo">
              <div className="main-content">
                <h4>Hi, Barbie</h4>
                <p>Date created</p>
              </div>
              <p>
                Open <FontAwesomeIcon icon={faArrowCircleRight} />
              </p>
            </div>
          </div>
        </Col>
        <Col md={5} className="mx-auto">
          <div className="profile">
            <h2>Hi , babrbie!</h2>
            <h2>Hi, Barbie!</h2>
            <h2>Hi, Barbie!</h2>
            <h2>Hi, Barbie!</h2>
          </div>
        </Col>
      </div>
    </>
  );
};

export default Bot;
