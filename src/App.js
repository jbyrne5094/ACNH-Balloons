import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title.jsx'
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
      </Col>
    </div>
  );
}

export default App;
