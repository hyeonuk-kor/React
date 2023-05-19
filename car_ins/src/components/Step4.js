import { useNavigate } from 'react-router-dom';

import React, { useState, useRef } from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import SignatureCanvas from 'react-signature-canvas';
const Step4 = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const handleNext = () => {
    navigate('/step5'); // Step4 페이지로 이동
  };
  const styles = {
    li: {
      listStyleType: 'none',
      marginLeft: '25px',
      paddingLeft: '20px',
    },
  };

  const imageStyle = {
    width: '15px',
    height: '15px',
    marginRight: '3px',
  };
  return (
    <Form
      name="signup"
      id="signup"
      className="needs-validation d-flex flex-column justify-content-center"
      noValidate
      style={{ minHeight: '100vh' }}
      onSubmit={handleNext}
    >
      <Row className="align-items-center mb-4">
        <Col md={6} className="d-flex justify-content-center mb-2">
          <h2>
            <strong>보험계약 체결 및 이행 동의</strong>
          </h2>
        </Col>
      </Row>
      <Row className="align-items-center">
        <Col md={6} className="d-flex justify-content-start mb-2">
          <div style={{ marginLeft: '30px' }}>
            <h4>
              <strong>| 서명란 |</strong>
            </h4>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col md={6} className="d-flex justify-content-center">
          <SignatureCanvas
            penColor="black"
            canvasProps={{
              width: 300,
              height: 150,
              className: 'sigCanvas',
              style: {
                border: '1px solid #ccc',
                borderRadius: '15px',
                boxShadow: '2px 2px 2px #ccc',
              },
            }}
          />
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col md={6} className="mb-3">
          <div
            style={{
              display: 'flex',
              marginLeft: '20px',
              padding: '15px',
            }}
          >
            <Card.Img
              src={process.env.PUBLIC_URL + '/li_tag.png'}
              style={imageStyle}
            />
            <Card.Title style={{ fontSize: '15px' }}>
              계약 체결을 위한 법률 및 규정에 따라 고객님의 서명이 필요합니다.
            </Card.Title>
          </div>
          <div
            style={{
              display: 'flex',
              marginLeft: '20px',
              padding: '15px',
            }}
          >
            <Card.Img
              src={process.env.PUBLIC_URL + '/li_tag.png'}
              style={imageStyle}
            />
            <Card.Title style={{ fontSize: '15px' }}>
              <strong>
                보험 가입 이외의 다른 용도로 절대 사용하지 않습니다.
              </strong>
            </Card.Title>
          </div>
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col md={6} className="d-flex justify-content-end">
          <Button
            className="btn-lg text-dark"
            type="submit"
            style={{
              fontFamily: 'KBFGB',
              backgroundColor: '#FFA500',
              border: 'none',
              borderRadius: '20px',
              fontSize: '15px',
              margin: '20px',
              width: '100px',
            }}
          >
            서명
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default Step4;
