import './Contact.css';
import { Col, Row } from 'react-bootstrap';
import ContactImg from '../../../assets/hero.svg';
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <section className="contact-section section" id="contact">
      <Col md={10} className="mx-auto">
        <Row>
          <Col md={6}>
            <Fade duration={2000} left>
              <form onSubmit={handleSubmit} className="contactForm">
                <h4 className="miniTitle section-header-title">CONTACT US</h4>
                <h5 className="section-tagline">GET IN TOUCH</h5>
                <Row>
                  <Col md={12} lg={6}>
                    <input placeholder="Your Name.." required type="text" />
                  </Col>
                  <Col md={12} lg={6}>
                    <input placeholder="Your Email" type="email" required />
                  </Col>
                  <Col md={12}>
                    <input placeholder="Subject" type="text" />
                  </Col>
                  <Col md={12}>
                    <textarea placeholder="Your Message..." required></textarea>
                  </Col>
                </Row>
                <button className="btn-1" type="submit">
                  Submit Now
                </button>
              </form>
            </Fade>
          </Col>
          <Col md={6}>
            <Fade duration={2000} right>
              <img src={ContactImg} alt="" className="img-fluid" />
            </Fade>
          </Col>
        </Row>
      </Col>
    </section>
  );
};

export default Contact;
