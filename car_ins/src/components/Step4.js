import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Step4 = () => {
  return (
    <Row className="justify-content-center">
      <Col md={6} className="text-center">
        <h2>가입이 완료되었습니다.</h2>
        <img
          src={`${process.env.PUBLIC_URL}/img.png`}
          alt="Success"
          style={{ maxWidth: '100%' }}
        />
      </Col>
    </Row>
  );
};

export default Step4;
