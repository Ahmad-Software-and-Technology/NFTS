import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './NameSec.css'; // Make sure to create and link this CSS file

const NameSec = () => {
  return (
    <Container fluid className="artfi-section  py-5 d-flex justify-content-center align-items-center ">
      <Row>
        <Col>

          <h1 className="artfi-title  d-inline-block">Let's start
Trading <span className="artfi-dot"></span></h1>
        <p className='name-para'>Invest and manage all your NFTs at one place.</p>
          
        </Col>
      </Row>
    </Container>
  );
};

export default NameSec;
