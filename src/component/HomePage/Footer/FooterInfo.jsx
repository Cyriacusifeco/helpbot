/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col } from 'react-bootstrap';

const FooterInfo = ({ data: { icon, info1, info2, id } }) => {
  return (
    <Col md={4}>
      <div
        className={`d-flex fContactInfo fContactInfo${id} align-items-center`}
      >
        <FontAwesomeIcon icon={icon} className="fContactIcon" />
        <div>
          <p className={`brnName${id}`}>{info1}</p>
          {info2 && <p>{info2}</p>}
        </div>
      </div>
    </Col>
  );
};

export default FooterInfo;
