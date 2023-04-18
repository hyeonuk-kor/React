import React from 'react';
import { Container } from 'react-bootstrap';
import useWindowSize from './components/useWindowSize';
import Step0 from './components/Step0';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const windowSize = useWindowSize();

  const styles = {
    container: {
      minHeight: windowSize.height,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  };

  return (
    <Container style={styles.container}>
      <Router>
        <Routes>
          <Route path="/car-ins/" element={<Step0 />} />
          <Route path="/car-ins/step1" element={<Step1 />} />
          <Route path="/car-ins/step2" element={<Step2 />} />
          <Route path="/car-ins/step3" element={<Step3 />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
