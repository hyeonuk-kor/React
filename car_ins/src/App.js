import React from 'react';
import { Container } from 'react-bootstrap';
import useWindowSize from './components/useWindowSize';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
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
          <Route path="/" element={<Step1 />} />
          <Route path="/step2" element={<Step2 />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
