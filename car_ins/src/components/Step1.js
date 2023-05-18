import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Step1() {
  const [carYear, setCarYear] = useState('');
  const [invalidCarYear, setInvalidCarYear] = useState(null);
  const [invalidName, setInvalidName] = useState(null);
  const [invalidCar, setInvalidCar] = useState(null);
  const [invalidJumin, setInvalidJumin] = useState(null);
  const [invalidAgreement, setInvalidAgreement] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const submitButtonStyle = {
    height: '38px',
    width: '100%',
    maxWidth: '100%',
    padding: '6px 12px',
    fontSize: '14px',
    fontFamily: 'KBFGB',
    backgroundColor:
      invalidCar !== null &&
      !invalidCar &&
      invalidCarYear !== null &&
      !invalidCarYear &&
      invalidJumin !== null &&
      !invalidJumin &&
      invalidName !== null &&
      !invalidName &&
      invalidAgreement !== null &&
      !invalidAgreement
        ? '#FFD85A'
        : '#6C757D',
    border: 'none',
  };

  const handleCheckboxChange = (event) => {
    setIsChecked(!isChecked);
    setInvalidAgreement(isChecked);
  };
  const handleJuminChange = (event) => {
    if (event.target.value === '') {
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
  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false || !isChecked) {
      form.classList.add('was-validated');
      if (!isChecked) {
        setInvalidAgreement(true);
      }
    } else {
      localStorage.setItem('name', form.elements.name.value);
      localStorage.setItem('pnum', form.elements.pnum.value.substring(0, 6));
      localStorage.setItem('car', form.elements.car.value);
      localStorage.setItem('caryear', form.elements.car_year.value);
      navigate('/step2');
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
      <Row className="">
        <Col md={4} xs={12} className="text-center">
          <h1>정보 기입</h1>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center mb-3">
        <Col md={4} xs={12} className="mb-2 text-center">
          <picture>
            <img
              src={process.env.PUBLIC_URL + '/디자인-11.png'}
              alt="Alternative text for the image"
              style={{ width: '30%', height: 'auto' }}
            />
          </picture>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center ">
        <Col md={4} xs={10} className="mb-2">
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
            style={{
              backgroundColor: '#F7F7F7', //gray
              border: invalidName == '' ? '1px solid #FFBC00' : '',
              boxShadow: invalidName == '' ? '0 0 0 0.2rem #FFBC00' : 'none',
              backgroundImage:
                invalidName == ''
                  ? `url(${process.env.PUBLIC_URL}/체크-y.png)`
                  : '',
              backgroundRepeat: invalidName ? '' : 'no-repeat',
              backgroundPosition: invalidName
                ? ''
                : 'center right calc(0.375em + 0.1875rem)',
              backgroundSize: invalidName
                ? ''
                : 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
            }}
          />
          <Form.Control.Feedback type="invalid">
            이름을 입력해주세요.
          </Form.Control.Feedback>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={4} xs={10} className="mb-2">
          <Form.Control
            type="text"
            id="pnum"
            name="pnum"
            minLength="6"
            maxLength="6"
            placeholder="생년월일"
            required
            isInvalid={invalidJumin}
            isValid={invalidJumin === false}
            onChange={handleJuminChange}
            style={{
              backgroundColor: '#F7F7F7',
              border: invalidJumin == '' ? '1px solid #FFBC00' : '',
              boxShadow: invalidJumin == '' ? '0 0 0 0.2rem #FFBC00' : 'none',
              backgroundImage:
                invalidJumin == ''
                  ? `url(${process.env.PUBLIC_URL}/체크-y.png)`
                  : '',
              backgroundRepeat: invalidJumin ? '' : 'no-repeat',
              backgroundPosition: invalidJumin
                ? ''
                : 'center right calc(0.375em + 0.1875rem)',
              backgroundSize: invalidJumin
                ? ''
                : 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
            }}
          />
          <Form.Control.Feedback type="invalid">
            생년월일을 입력해주세요.
          </Form.Control.Feedback>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={4} xs={10} className="mb-2">
          <Form.Control
            type="text"
            id="car"
            placeholder="자동차"
            name="car"
            required
            isInvalid={invalidCar}
            isValid={invalidCar === false}
            onChange={handleCarChange}
            style={{
              backgroundColor: '#F7F7F7',
              border: invalidCar == '' ? '1px solid #FFBC00' : '',
              boxShadow: invalidCar == '' ? '0 0 0 0.2rem #FFBC00' : 'none',
              backgroundImage:
                invalidCar == ''
                  ? `url(${process.env.PUBLIC_URL}/체크-y.png)`
                  : '',
              backgroundRepeat: invalidCar ? '' : 'no-repeat',
              backgroundPosition: invalidCar
                ? ''
                : 'center right calc(0.375em + 0.1875rem)',
              backgroundSize: invalidCar
                ? ''
                : 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
            }}
          />
          <Form.Control.Feedback type="invalid">
            자동차를 입력해주세요.
          </Form.Control.Feedback>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={4} xs={10} className="mb-2">
          <Form.Group>
            <Form.Control
              as="select"
              name="car_year"
              id="year"
              style={{
                color: invalidCarYear == '' ? 'black' : '#6C757D',
                backgroundColor: '#F7F7F7',
                border: invalidCarYear == '' ? '1px solid #FFBC00' : '',
                boxShadow:
                  invalidCarYear == '' ? '0 0 0 0.2rem #FFBC00' : 'none',
                backgroundImage:
                  invalidCarYear == ''
                    ? `url(${process.env.PUBLIC_URL}/체크-y.png)`
                    : '',
                backgroundRepeat: invalidCarYear ? '' : 'no-repeat',
                backgroundPosition: invalidCarYear
                  ? ''
                  : 'center right calc(0.375em + 0.1875rem)',
                backgroundSize: invalidCarYear
                  ? ''
                  : 'calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)',
              }}
              value={carYear}
              onChange={handleCarYearChange}
              required
              isInvalid={invalidCarYear}
            >
              <option value="" disabled hidden>
                연식
              </option>
              <option value="1년" style={{ color: 'black' }}>
                1년
              </option>
              <option value="2년" style={{ color: 'black' }}>
                2년
              </option>
              <option value="3년" style={{ color: 'black' }}>
                3년
              </option>
              <option value="4년" style={{ color: 'black' }}>
                4년
              </option>
              <option value="5년" style={{ color: 'black' }}>
                5년
              </option>
              <option value="6년" style={{ color: 'black' }}>
                6년
              </option>
              <option value="7년" style={{ color: 'black' }}>
                7년
              </option>
              <option value="8년" style={{ color: 'black' }}>
                8년
              </option>
              <option value="9년" style={{ color: 'black' }}>
                9년
              </option>
              <option value="10년 이상" style={{ color: 'black' }}>
                10년 이상
              </option>
              {/*     {carYearOptions.map((year, index) => (
                <option key={index} value={year} style={{ color: 'black' }}>
                  {year}
                </option>
              ))} */}
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
            className="d-flex align-items-center justify-content-center"
          >
            <input
              required=""
              type="checkbox"
              id="agreement"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{
                appearance: 'none',
                width: '20px',
                height: '20px',
                backgroundColor: isChecked ? '#FFBC00' : 'transparent',
                border: isChecked ? 'none' : '1px solid gray',
                borderRadius: '4px',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                outline: 'none',
                cursor: 'pointer',
              }}
            />
            <Form.Label
              className="custom-control-label"
              style={{ margin: '0 0 0 5px' }}
            >
              개인정보 수집 및 이용에 동의합니다.
            </Form.Label>
          </Form.Group>
          {invalidAgreement === true && (
            <Form.Control.Feedback
              className="d-block text-center"
              type="invalid"
            >
              개인정보 수집 및 이용에 동의해주세요.
            </Form.Control.Feedback>
          )}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={4} xs={10} className="d-flex justify-content-center">
          <Button className="text-dark" type="submit" style={submitButtonStyle}>
            금액확인
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default Step1;
