import React from 'react';
import './App.css';
import Title from './components/Title/Title.jsx'
import BalloonSheet from './components/Sheets/BalloonSheet.jsx'
import {Col, Row} from 'react-bootstrap';

function App() {
  return (
    <div>
      <Col>
        <Row>
          <Col>
            <Title />
          </Col>
        </Row>
        <Row>
          <BalloonSheet />
        </Row>
      </Col>
    </div>
  );
}

export default App;
