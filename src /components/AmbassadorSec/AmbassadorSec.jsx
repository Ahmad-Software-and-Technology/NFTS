import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import './AmbassadorSec.css'; // Make sure to create and link this CSS file

// Assuming these are the paths to your images
import ambassadorLeft from '../../assets/image-bg-removebg.png';
import ambassadorRight from '../../assets/image-bg-removebg.png';
import image1 from '../../assets/images/alex-shuper-aXgYJtVA3A8-unsplash.jpg';
import image2 from '../../assets/images/pexels-pavel-danilyuk-8381966(1).jpg';
import image3 from '../../assets/images/pexels-darya-sannikova-1671014.jpg';
const AmbassadorSection = () => {
  return (
    <Container fluid className="ambassador-section text-center py-5 my-5 ">
      <Row className="align-items-center amb-row">
        <Col xs={12} md={3} className="mb-3 mb-md-0">
          <img src={ambassadorLeft} alt="Ambassador Left" className="img-fluid rounded-circle border" />
        </Col>
        <Col xs={12} md={6}>
          <h2>Building a </h2>
          <h3>Distinguished Community at NftyArt</h3>
          <p>Discover how to educate the wider population on the value of art investing and make investing accessible for all.</p>
          {/* <Button variant="primary " className='mb-3'>Learn more</Button> */}
        </Col>
        <Col xs={12} md={3} className=" mb-md-0 ">
          <img src={ambassadorRight} alt="Ambassador Right" className="img-fluid rounded-circle border" />
        </Col>
      </Row>
      <Container className="gallery my-5 ">
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="gallery-item">
          <img src={image1} alt="Gallery Art 1" className="img-ambassador img-fluid-1" />
        </Col>
        <Col xs={12} md={4} className="gallery-item">
          <img src={image2} alt="Gallery Art 2" className="img-ambassador img-fluid-1" />
        </Col>
        <Col xs={12} md={4} className="gallery-item">
          <img src={image3} alt="Gallery Art 3" className="img-ambassador  img-fluid-1" />
        </Col>
      </Row>
    </Container>
      <Row className="my-4 ">
        <Container fluid className='px-5'>

        <Col lg={12} className="text-section text-justify  ">
        
          <p className='ambassador-content'>
          <h6>Integrating Art and Investment</h6>
          <p>NftyArt is dedicated to forging a refined community where art enthusiasts, collectors, and investors unite. Our focus is on cultivating a space where the aesthetic appreciation of art meets its investment potential.</p>
          <h6>Role of NftyArt Ambassadors</h6>
          <p>Our ambassadors, esteemed in both the art and investment realms, are pivotal in guiding this community. They provide insightful advice and foster connections that enrich our understanding of art as both a cultural treasure and a valuable asset.</p>
          <h6>Exclusive Opportunities</h6>
          <p>Being part of the NftyArt community means access to exclusive events, private viewings, and insightful dialogues, creating an environment where passion for art and investment savvy coexist and thrive.</p>
          </p>
          {/* <Button variant="primary" >Learn more</Button> */}
        </Col>
        </Container>
      </Row>
    </Container>
  );
};

export default AmbassadorSection;
