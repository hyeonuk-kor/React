import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RadioItem from './RadioItem';
function Step3() {
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
      <Row className="align-items-center mb-4">
        <Col md={6} className="d-flex justify-content-center">
          <p className="h3 mb-0 text-center">나를 위한 1:1 맞춤 상품</p>
        </Col>
      </Row>
      <RadioItem
        label="10년 만기 상품"
        duration={new Date(
          Date.now() + 10 * 365 * 24 * 60 * 60 * 1000
        ).toLocaleDateString('ko-KR', {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
        })}
        refund="95,497원"
        rate="8%"
        imageSrc={process.env.PUBLIC_URL + '/carBg1.png'}
      />
      <RadioItem
        label="15년 만기 상품"
        duration={new Date(
          Date.now() + 15 * 365 * 24 * 60 * 60 * 1000
        ).toLocaleDateString('ko-KR', {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
        })}
        refund="222,470원"
        rate="9%"
        imageSrc={process.env.PUBLIC_URL + '/carBg11.png'}
      />
      <RadioItem
        label="20년 만기 상품"
        duration={new Date(
          Date.now() + 20 * 365 * 24 * 60 * 60 * 1000
        ).toLocaleDateString('ko-KR', {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
        })}
        refund="380,160원"
        rate="12%"
        imageSrc={process.env.PUBLIC_URL + '/carBg111.png'}
      />
    </Form>
  );
}

export default Step3;
