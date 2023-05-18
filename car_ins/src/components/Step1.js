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
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    const carYears = [];
    for (let i = 1; i <= 9; i++) {
      carYears.push(i + '년');
    }
    carYears.push('10년 이상');
    setCarYearOptions(carYears);
  }, []);

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

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setInvalidAgreement(isChecked);
  };
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
            value={jumin}
            minLength="14"
            maxLength="14"
            placeholder="주민등록번호"
            required
            isInvalid={invalidJumin}
            isValid={invalidJumin === false}
            onKeyDown={saveJumin}
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
            주민등록번호를 입력해주세요.
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
              {carYearOptions.map((year, index) => (
                <option key={index} value={year} style={{ color: 'black' }}>
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
