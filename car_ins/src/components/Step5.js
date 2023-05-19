import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Step4 = () => {
  return (
    <Row className="justify-content-center">
      <Col md={6} className="text-center">
        <img
          src={`${process.env.PUBLIC_URL}/1-7.jpg`}
          alt="Success"
          style={{ maxWidth: '100%' }}
        />
      </Col>
    </Row>
  );
};

export default Step4;
