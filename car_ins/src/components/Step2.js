import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Step2() {
  const [invalidName, setInvalidName] = useState(null);
  const navigate = useNavigate();
  const handleNameChange = (event) => {
    if (event.target.value.length < 2) {
      setInvalidName(true);
    } else {
      setInvalidName(false);
    }
  };

  const handleSubmit = (event) => {
    const form = document.getElementById('signup');
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      form.classList.add('was-validated'); // 폼 유효성 검사 표시 추가
    } else {
      navigate('/car-ins/step2');
    }
  };

  return (
    <Form
      name="signup"
      id="signup"
      className="needs-validation"
      noValidate
      onSubmit={handleSubmit}
    >
      <Row className="d-flex justify-content-center">
        <Col md={4} className="mb-2">
          <Form.Label>2페이지</Form.Label>
          <Form.Control
            type="text"
            id="name"
            placeholder="ex) 홍길동"
            name="name"
            minLength="2"
            required
            isInvalid={invalidName}
            isValid={invalidName === false}
            onChange={handleNameChange}
          />
          <Form.Control.Feedback type="invalid">
            이름을 입력해주세요.
          </Form.Control.Feedback>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4} className="mb-3 d-flex justify-content-center">
          <Button
            className="btn-lg btn-block text-dark btn-yellow"
            type="submit"
          >
            보험료 계산 / 가입
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Step2;
