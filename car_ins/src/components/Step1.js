import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Step1() {
  const [carYear, setCarYear] = useState('');
  const [invalidCarYear, setInvalidCarYear] = useState(null);
  const [carYearOptions, setCarYearOptions] = useState([]);
  const [invalidName, setInvalidName] = useState(null);
  const [invalidCar, setInvalidCar] = useState(null);
  const [invalidJumin, setInvalidJumin] = useState(null);
  const [invalidAgreement, setInvalidAgreement] = useState(null);
  const [jumin, setJumin] = useState('');
  const [realJumin, setRealJumin] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const carYears = [];
    for (let i = 1; i <= 9; i++) {
      carYears.push(i + '년');
    }
    carYears.push('10년 이상');
    setCarYearOptions(carYears);
  }, []);
  const saveJumin = (event) => {
    const maxLength = 14;
    if (event.key === '-' || (event.key >= '0' && event.key <= '9')) {
      const input = realJumin + event.key;
      if (input.length <= maxLength) {
        setRealJumin(input);
      }
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
      const input = realJumin.slice(0, -1);
      setRealJumin(input);
    }
  };
  const handleJuminChange = (event) => {
    const maskingSymbol = '\u25CF'; // 마스킹 기호 문자열
    let input = event.target.value;
    input = input.replace('-', '');
    if (input.length > 6) {
      const ju1 = input.substring(0, 6);
      let ju2 = input.substring(6, 7);

      for (let i = 1; i < input.substring(6).length && i < 7; i++) {
        ju2 = ju2 + maskingSymbol;
      }

      input = ju1 + '-' + ju2;
    }

    setJumin(input);
    setRealJumin(input.replace('-', ''));

    if (jumin.length !== 13) {
      setInvalidJumin(true);
    } else {
      setInvalidJumin(false);
    }
  };
  const handleNameChange = (event) => {
    if (event.target.value === '') {
      setInvalidName(true);
    } else {
      setInvalidName(false);
    }
  };
  const handleCarYearChange = (event) => {
    const selectedYear = event.target.value;
    setCarYear(selectedYear);

    if (selectedYear === '') {
      setInvalidCarYear(true);
    } else {
      setInvalidCarYear(false);
    }
  };
  const handleCarChange = (event) => {
    if (event.target.value === '') {
      setInvalidCar(true);
    } else {
      setInvalidCar(false);
    }
  };
  const handleAgreementChange = (event) => {
    setInvalidAgreement(!event.target.checked);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      form.classList.add('was-validated');
      if (!form.elements.agreement.checked) {
        setInvalidAgreement(true);
      }
    } else {
      localStorage.setItem('name', form.elements.name.value);
      navigate('/kbds/v2/step2');
    }
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
      <Row className="d-flex justify-content-center">
        <Col md={4} xs={12} className="mb-2 text-center">
          <picture>
            <img
              src={process.env.PUBLIC_URL + '/carBg2.png'}
              alt="Alternative text for the image"
              style={{ width: '70%', height: 'auto' }}
            />
          </picture>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={4} xs={12} className="mb-2">
          <Form.Control
            type="text"
            id="name"
            placeholder="이름"
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
      <Row className="d-flex justify-content-center">
        <Col md={4} xs={12} className="mb-2">
          <Form.Control
            type="text"
            id="pnum"
            name="pnum"
            value={jumin}
            minLength="14"
            maxLength="14"
            placeholder="주민등록번호"
            required
            isInvalid={invalidJumin}
            isValid={invalidJumin === false}
            onKeyDown={saveJumin}
            onChange={handleJuminChange}
          />
          <Form.Control.Feedback type="invalid">
            주민등록번호를 입력해주세요.
          </Form.Control.Feedback>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={4} xs={12} className="mb-2">
          <Form.Control
            type="text"
            id="car"
            placeholder="자동차"
            name="car"
            required
            isInvalid={invalidCar}
            isValid={invalidCar === false}
            onChange={handleCarChange}
          />
          <Form.Control.Feedback type="invalid">
            자동차를 입력해주세요.
          </Form.Control.Feedback>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={4} xs={12} className="mb-2">
          <Form.Group>
            <Form.Control
              as="select"
              name="car_year"
              id="year"
              style={{ color: carYear === '' ? '#6c757d' : '#212529' }}
              value={carYear}
              onChange={handleCarYearChange}
              required
              isInvalid={invalidCarYear}
            >
              <option value="" disabled hidden>
                연식
              </option>
              {carYearOptions.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              연식을 선택해주세요.
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={4} xs={12} className="mb-2">
          <Form.Group
            controlId="agreement"
            className="d-flex align-items-center"
          >
            <Form.Check
              type="checkbox"
              className="mr-2 custom-control-input"
              required
              checked={invalidAgreement === false}
              onChange={handleAgreementChange}
            />
            <Form.Label
              className="custom-control-label"
              style={{ margin: '0 0 0 5px' }}
            >
              개인정보 수집 및 이용에 동의합니다.
            </Form.Label>
          </Form.Group>
          {invalidAgreement === true && (
            <Form.Control.Feedback className="d-block" type="invalid">
              개인정보 수집 및 이용에 동의해주세요.
            </Form.Control.Feedback>
          )}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6} xs={12} className="mb-3 d-flex justify-content-end">
          {' '}
          {/* 변경: xs 속성 추가 */}
          <Button
            className="btn-sm text-dark"
            type="submit"
            style={{
              backgroundColor: '#FFA500', // kb 색상
              border: 'none', // 테두리 제거
            }}
          >
            금액확인
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Step1;
