import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Step0() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    navigate('/kbds/v2/step1');
  };
  const styles = {
    li: {
      listStyleType: 'none',
      marginLeft: '20px',
      paddingLeft: '23px',
      backgroundImage: `url(${process.env.PUBLIC_URL}/li_tag.png)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '20px 20px', // 이미지 크기 조절
    },
  };

  return (
    <Form
      name="signup"
      id="signup"
      className="needs-validation d-flex flex-column justify-content-center"
      noValidate
      onSubmit={handleSubmit}
      style={{ minHeight: '100vh', backgroundColor: '#FFD85A' }}
    >
      <Row className="align-items-center mb-4">
        <Col md={6}>
          <div style={{ marginLeft: '20px' }}>
            <p className="h3 mb-0">나를 위한 1:1 맞춤 컨설팅</p>
            <h2 className="mb-0 fw-bold">KB 자동차보험</h2>
          </div>
          <br></br>
          <picture>
            <img
              src={process.env.PUBLIC_URL + '/logo-09.png'}
              alt="Alternative text for the image"
              className="img-fluid rounded"
            />
          </picture>
        </Col>
      </Row>
      <Row className="justify-content-start">
        <Col md={6} className="mb-3">
          <li style={styles.li}>고객님께 딱 맞는 보장 설계를 해드려요.</li>
          <li style={styles.li}>많은 담보들을 알기 쉽게 알려 드려요. </li>
          <li style={styles.li}>바쁘신 고객님을 위해 직접 달려 갑니다. </li>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} xs={10} className="d-flex justify-content-center">
          <Button
            className="text-dark"
            type="submit"
            style={{
              height: '38px',
              width: '100%',
              maxWidth: '100%',
              padding: '6px 12px',
              fontSize: '14px',
              fontFamily: 'KBFGB',
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

export default Step0;
