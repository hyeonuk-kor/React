import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import RadioItem from './RadioItem';
function Step2() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setShowFeedback(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (selectedOption !== null) {
      navigate('/car-ins/step4');
    } else {
      setShowFeedback(true);
    }
  };

  return (
    <Form noValidate onSubmit={handleSubmit}>
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
        checked={selectedOption === 'option1'}
        onChange={() => {
          if (selectedOption !== 'option1') {
            handleOptionChange('option1');
          }
        }}
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
        checked={selectedOption === 'option2'}
        onChange={() => {
          if (selectedOption !== 'option2') {
            handleOptionChange('option2');
          }
        }}
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
        checked={selectedOption === 'option3'}
        onChange={() => {
          if (selectedOption !== 'option3') {
            handleOptionChange('option3');
          }
        }}
      />
      {showFeedback && (
        <Form.Control.Feedback type="invalid" className="d-block">
          상품을 선택해주세요.
        </Form.Control.Feedback>
      )}
      <Row className="justify-content-center">
        <Col md={6} xs={12} className="mb-3 d-flex justify-content-end">
          <Button
            className="btn-sm text-dark"
            type="submit"
            style={{
              backgroundColor: '#FFA500', // kb 색상
              border: 'none', // 테두리 제거
            }}
          >
            다음
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Step2;
