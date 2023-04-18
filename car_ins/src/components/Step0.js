import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Step0() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate('/car-ins/step1');
  };

  return (
    <Form
      name="signup"
      id="signup"
      className="needs-validation d-flex flex-column justify-content-center"
      noValidate
      onSubmit={handleSubmit}
      style={{ minHeight: '100vh' }}
    >
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <p className="h3 mb-0">나를 위한 1:1 맞춤 컨설팅</p>
          <h2 className="mb-0 fw-bold">KB 자동차보험</h2>
          <br></br>
          <picture>
            <img
              src={process.env.PUBLIC_URL + '/img.png'}
              alt="Alternative text for the image"
              className="img-fluid rounded"
            />
          </picture>
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col md={6}>
          <ul className="text-muted">
            <li>고객님께 딱 맞는 보장 설계를 해드려요.</li>
            <li>많은 담보들을 알기 쉽게 알려 드려요. </li>
            <li>바쁘신 고객님을 위해 직접 달려 갑니다. </li>
          </ul>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col md={6} xs={12} className="mb-3 d-flex justify-content-end">
          <Button variant="warning" size="sm" type="submit">
            다음
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Step0;
