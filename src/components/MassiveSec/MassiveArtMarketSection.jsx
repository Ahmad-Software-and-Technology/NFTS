import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './MassiveArtMarketSection.css'; // Make sure to create and link this CSS file

const MassiveArtMarketSection = () => {
  return (
    <Container fluid className="massive-art-market-section my-5 py-5 px-5">
      <Row className="text-center mb-4 py-5">
        <Col>
          <h2>"Unlocking the World of ART"</h2>
          <p className="text-secondary">
          ART Token: Empowering the NFTyART Community
          </p>
        </Col>
      </Row>
      <Row className='my-5 massive-row'>
        <Col md={4} className="mb-3 massive-col ">
          <Card className="h-100">
            <Card.Body className='my-auto mx-2'>
              <Card.Title className='card-title px-3 py-2'>The NFTyART ecosystem is driven by a powerful engine of collaboration and empowerment, embodied in our governance token. This innovative token, a cornerstone of our platform, serves as a mechanism to amplify the voices and decisions of our community members.</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3 massive-col">
          <Card className="h-100">
            <Card.Body className='my-auto mx-2 px-3 py-2'>
              <Card.Title>In a dynamic digital landscape, NFTyART Marketplace stands at the forefront of innovation with its Multichain Integration feature. This groundbreaking addition elevates the user experience, offering enhanced scalability, interoperability, and accessibility for artists and collectors alike.</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-3 massive-col ">
          <Card className="h-100">
            <Card.Body className='my-auto mx-2 px-3 py-2'>
              <Card.Title>NFTyART is not just a marketplace; it's a canvas for artists to showcase their talent to a global audience. By participating, you empower artists to redefine the boundaries of art and establish new paradigms of value and recognition.</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MassiveArtMarketSection;
