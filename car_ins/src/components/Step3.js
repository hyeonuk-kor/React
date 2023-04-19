import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Canvas from './Canvas';
import { useNavigate } from 'react-router-dom';

const Step3 = () => {
  const navigate = useNavigate();

  const handleSign = () => {
    navigate('/kbds/v2/step4');
  };

  return (
    <Form
      name="signup"
      id="signup"
      className="needs-validation d-flex flex-column justify-content-center"
      noValidate
      style={{ minHeight: '100vh' }}
    >
      <Row className="justify-content-center">
        <Col md={4} className="text-muted">
          <h2 className="text-center">전자서명</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} className="mb-3 d-flex justify-content-center">
          <Canvas />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={6} xs={12} className="mb-3 d-flex justify-content-end">
          <Button
            className="btn-sm text-dark"
            style={{
              backgroundColor: '#FFA500',
              border: 'none',
            }}
            onClick={handleSign}
          >
            서명
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Step3;
