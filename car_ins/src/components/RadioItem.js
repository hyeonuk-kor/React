import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../radio.css'; // CSS 파일 import

function RadioItem({
  label,
  duration,
  refund,
  rate,
  imageSrc,
  checked,
  onChange,
}) {
  const cardStyles = {
    width: '90%',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: 'white',
    borderRadius: '15px',
    marginLeft: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const titleStyles = {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: 0,
    marginLeft: '10px',
  };

  const listStyles = {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    marginTop: '10px',
    marginLeft: '10px',
  };

  return (
    <Row className="justify-content-center">
      <Col
        className="align-items-center"
        xs={12}
        sm={8}
        md={6}
        lg={4}
        style={{ padding: '10px' }}
      >
        <label style={cardStyles} onClick={onChange}>
          {' '}
          {/* onClick 이벤트를 label로 이동 */}
          <Row className="justify-content-center align-items-center">
            <Col xs={1}>
              <div className={`radio ${checked ? 'checked' : ''}`}>
                {checked && <div className="dot"></div>}
              </div>
            </Col>
            <Col xs={6} className="text-left">
              <p style={titleStyles}>{label}</p>
              <ul style={listStyles}>
                <li>기간: ~ {duration}</li>
                <li style={{ marginBottom: '5px' }}>환급금: {refund}</li>
                <li>환급률: {rate}</li>
              </ul>
            </Col>
            <Col
              xs={4}
              className="d-flex align-items-center justify-content-center"
              // style={{
              //   height: '100%',
              // }}
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
      </Col>
    </Row>
  );
}

export default RadioItem;
