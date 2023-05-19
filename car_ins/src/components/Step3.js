import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Step3() {
  const navigate = useNavigate();

  const cardStyle = {
    borderRadius: '15px',
    marginLeft: '20px', // 좌우 여백을 20px로 조정
    marginRight: '20px',
    border: 'none', // Remove the border
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)', // Add shadow effect
  };

  const imageStyle = {
    maxWidth: '23px', // 그림의 최대 너비를 40px로 조정
    marginRight: '5px',
  };

  const tableStyle = {
    width: '100%',
    marginBottom: '10px',
  };

  const cellStyle = {
    borderBottom: '1px solid #CCC',
    padding: '3px',
  };

  const rightCellStyle = {
    ...cellStyle,
    borderRight: '0',
  };
  const selectedOption = localStorage.getItem('selectedOption');
  const 가입기간 =
    selectedOption === 'option1'
      ? '10년'
      : selectedOption === 'option2'
      ? '15년'
      : '20년';
  const today = new Date();
  const year =
    selectedOption === 'option1'
      ? today.getFullYear() + 10
      : selectedOption === 'option2'
      ? today.getFullYear() + 15
      : today.getFullYear() + 20;
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  const 종료일 = `${year}-${month}-${day}`;

  const 보험료 =
    selectedOption === 'option1'
      ? '95,497원'
      : selectedOption === 'option2'
      ? '222,470원'
      : '380,160원';

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    navigate('/step4');
  };
  const handlePersonalInfoEdit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // 개인정보 수정 버튼 클릭 시 실행되는 함수
    navigate('/step1');
  };

  const handleProductInfoEdit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    // 상품정보 수정 버튼 클릭 시 실행되는 함수
    navigate('/step2');
  };
  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Row className="align-items-center">
        <Col md={6} className="d-flex justify-content-center mb-2">
          <h2>
            <strong>가입정보 확인</strong>
          </h2>
        </Col>
      </Row>
      <Row className="align-items-center mb-2">
        <Col md={6} className="d-flex justify-content-center mb-2">
          <strong>아래 정보를 다시 한번 확인해 주세요.</strong>
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col>
          <Card style={cardStyle}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '20px',
                marginTop: '10px',
              }}
            >
              <Card.Img
                src={process.env.PUBLIC_URL + '/디자인-27.png'}
                style={imageStyle}
              />
              <Card.Title style={{ fontSize: '18px', marginBottom: '0' }}>
                <strong>개인정보</strong>
              </Card.Title>
            </div>
            <Card.Body>
              <table style={tableStyle}>
                <tbody>
                  <tr>
                    <td style={cellStyle}>이름</td>
                    <th style={rightCellStyle}>
                      {localStorage.getItem('name')}
                    </th>
                  </tr>
                  <tr>
                    <td style={cellStyle}>생년월일</td>
                    <th style={rightCellStyle}>
                      {localStorage.getItem('pnum')}
                    </th>
                  </tr>
                  <tr>
                    <td style={cellStyle}>차종</td>
                    <th style={rightCellStyle}>
                      {localStorage.getItem('car')}
                    </th>
                  </tr>
                  <tr>
                    <td style={cellStyle}>연식</td>
                    <th style={rightCellStyle}>
                      {localStorage.getItem('caryear')}
                    </th>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <Col>
          <Card style={cardStyle}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginLeft: '20px',
                marginTop: '10px',
              }}
            >
              <Card.Img
                src={process.env.PUBLIC_URL + '/디자인-28.png'}
                style={imageStyle}
              />
              <Card.Title style={{ fontSize: '18px', marginBottom: '0' }}>
                <strong>상품정보</strong>
              </Card.Title>
            </div>
            <Card.Body>
              <table style={tableStyle}>
                <tbody>
                  <tr>
                    <td style={cellStyle}>가입기간</td>
                    <th style={rightCellStyle}>{가입기간}</th>
                  </tr>
                  <tr>
                    <td style={cellStyle}>종료일</td>
                    <th style={rightCellStyle}>{종료일}</th>
                  </tr>
                  <tr>
                    <td style={cellStyle}>보험료</td>
                    <th style={rightCellStyle}>{보험료}</th>
                  </tr>
                </tbody>
              </table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="align-items-center mb-4">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            className="btn-lg text-dark"
            type="submit"
            style={{
              fontFamily: 'KBFGB',
              backgroundColor: '#FFA500',
              border: 'none',
              borderRadius: '20px',
              fontSize: '11px',
              margin: '3px',
              width: '100px',
            }}
            onClick={handlePersonalInfoEdit}
          >
            개인정보 수정
          </Button>
          <Button
            className="btn-lg text-dark"
            type="submit"
            style={{
              fontFamily: 'KBFGB',
              backgroundColor: '#FFA500',
              border: 'none',
              borderRadius: '20px',
              fontSize: '11px',
              margin: '3px',
              width: '100px',
            }}
            onClick={handleProductInfoEdit}
          >
            상품정보 수정
          </Button>
          <Button
            className="btn-lg text-dark"
            type="submit"
            style={{
              fontFamily: 'KBFGB',
              backgroundColor: '#FFA500',
              border: 'none',
              borderRadius: '20px',
              fontSize: '11px',
              margin: '3px',
              width: '100px',
            }}
          >
            서명 / 가입
          </Button>
        </div>
      </Row>
    </Form>
  );
}

export default Step3;
