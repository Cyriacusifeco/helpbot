import './Footer.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import FooterCol from './FooterCol';
import {
  usefulLink,
  ourServices,
  otherLinks,
  footerInfo,
} from '../../FooterData';
import FooterInfo from './FooterInfo';
import { Link } from 'react-router-dom';
import { scrollUP } from '../../Shared/ScrollTop/ScrollTop';

const Footer = () => {
  return (
    <section className="section-footer row footer">
      <Row className="col-md-11 mx-auto">
        <Row className="align-items-center footerInfo">
          {footerInfo.map((data) => (
            <FooterInfo data={data} key={data.id} />
          ))}
        </Row>
        <Col md={6} lg={3} className="fAboutUs footerLink">
          <h5>ABOUT US</h5>
          <span className="animate-border"></span>
          <p className="aboutUsDes">
            We specialize in providing businesses with cutting-edge AI chatbot
            solutions that elevate customer interactions to new heights.
          </p>
          <ul className="socialIcons">
            <li>
              <Link onClick={scrollUP} to="/">
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
            </li>
            <li>
              <Link onClick={scrollUP} to="/">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li>
              <Link onClick={scrollUP} to="/">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </li>
            <li>
              <Link onClick={scrollUP} to="/">
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
          </ul>
        </Col>
        <FooterCol key="2" menuItems={usefulLink} title="USEFUL LINK" />
        <FooterCol key="3" menuItems={ourServices} title="OUR SERVICES" />
        <FooterCol key="4" menuItems={otherLinks} title="OTHER LINKS" />
      </Row>
      <p className="copyRight">
        Copyright &copy; 2023 <span className="fHighlight">HelpBot Team</span>.
        All rights reserved.
      </p>
    </section>
  );
};
export default Footer;
