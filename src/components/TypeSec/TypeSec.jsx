import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import YourGif from '../../assets/FeatureLogo/project-hero-1.gif';
import "./TypeSec.css"

const TypeSec = () => {
  return (
    <Container fluid className="collect-section">
    <Row>

      <Col xs={12} className="text-center">
        <img src={YourGif} alt="Animated Content" className="collect-gif" />
      </Col>
    </Row>
  </Container>
  )
}

export default TypeSec