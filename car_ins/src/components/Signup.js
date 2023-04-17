import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import useWindowSize from './useWindowSize';
import logo from '../logo.svg';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { width, height } = useWindowSize();
  const [jumin, setJumin] = useState('');
  const [realJumin, setRealJumin] = useState('');
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
    console.log(jumin);
    console.log(realJumin);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
      }}
    >
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ marginBottom: 20 }}>
          <img src={logo} alt="로고" />
        </div>
        <div style={{ marginBottom: 10 }}>
          <TextField
            label="이메일"
            variant="outlined"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <TextField
            label="비밀번호"
            type="password"
            variant="outlined"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <TextField
            label="주민등록번호"
            value={jumin}
            variant="outlined"
            type="text"
            onKeyDown={saveJumin}
            onChange={handleJuminChange}
            inputProps={{
              maxLength: 14,
              placeholder: 'ex) 123456-1234567',
            }}
          />
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            가입하기
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
