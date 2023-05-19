import React from 'react';
import { Container } from 'react-bootstrap';
import useWindowSize from './components/useWindowSize';
import Step0 from './components/Step0';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';
import Step5 from './components/Step5';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const windowSize = useWindowSize();

  const styles = {
    container: {
      minHeight: windowSize.height,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'white', // 기본 배경색
    },
  };

  const currentPath = window.location.hash;

  if (
    currentPath === '#/step2' ||
    currentPath === '#/step3' ||
    currentPath === '#/step4'
  ) {
    styles.container.backgroundColor = '#F7F7F7'; // gray 배경색
  }

  return (
    <Container style={styles.container}>
      <Router>
        <Routes>
          <Route path="/" element={<Step0 />} />
          <Route path="/step1" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/step5" element={<Step5 />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
