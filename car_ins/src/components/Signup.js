import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import useWindowSize from './useWindowSize';
import logo from '../logo.svg';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [juminMasked, setJuminMasked] = useState('');
  const { width, height } = useWindowSize();

  const handleJuminChange = (event) => {
    const value = event.target.value;
    if (juminMasked.length === 6 && value[value.length - 1] != '-') {
      setJuminMasked(juminMasked + '-' + value[value.length - 1]);
    } else if (juminMasked.length === 6 && value[value.length - 1] == '-') {
      setJuminMasked(juminMasked + '-');
    } else if (value.length > 8) {
      setJuminMasked(juminMasked + '●');
    } else {
      setJuminMasked(value);
    }
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
            value={juminMasked}
            variant="outlined"
            type="text"
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
