import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
function RadioItem(props) {
  const { label, duration, refund, rate, imageSrc } = props;

  return (
    <label style={{ width: '100%', padding: '10px', cursor: 'pointer' }}>
      <Row className="justify-content-center align-items-center">
        <Col xs={1}>
          <input type="radio" name="radio-group" />
        </Col>
        <Col xs={7} className="text-left">
          <p style={{ fontSize: '16px', fontWeight: 'bold', margin: 0 }}>
            {label}
          </p>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
            <li>기간: ~ {duration}</li>
            <li style={{ marginBottom: '5px' }}>환급금: {refund}</li>
            <li>환급률: {rate}</li>
          </ul>
        </Col>
        <Col
          xs={4}
          className="d-flex align-items-center"
          style={{
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src={imageSrc}
            alt="Alternative text for the image"
            style={{
              width: '75%',
            }}
          />
        </Col>
      </Row>
    </label>
  );
}

export default RadioItem;
