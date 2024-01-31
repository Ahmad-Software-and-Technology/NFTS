import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FeatureSection.css'; // Make sure to link this CSS file

// Assuming these are the paths to your logo images
import logo1 from '../../assets/FeatureLogo/1.webp';
import logo2 from '../../assets/FeatureLogo/2.webp';
import logo3 from '../../assets/FeatureLogo/3.webp';
import logo4 from '../../assets/FeatureLogo/4.webp';
import logo5 from '../../assets/FeatureLogo/5.webp';
import logo6 from '../../assets/FeatureLogo/6.webp';
import logo7 from '../../assets/FeatureLogo/7.webp';
import logo8 from '../../assets/FeatureLogo/8.webp';
import logo9 from '../../assets/FeatureLogo/9.webp';
import logo10 from '../../assets/FeatureLogo/10.webp';
import logo11 from '../../assets/FeatureLogo/11.webp';
import logo12 from '../../assets/FeatureLogo/12.webp';
// ... other logos

const FeaturedSection = () => {
  return (
    <Container className="featured-section py-5 my-5 justify-content-center align-items-center text-center ">
      <h3 className="text-center mb-4  ">Featured In</h3>
      <Row className="justify-content-center align-items-center w-100">
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo1} alt="Company Logo 1" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo2} alt="Company Logo 2" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo3} alt="Company Logo 3" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo4} alt="Company Logo 3" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo5} alt="Company Logo 3" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo6} alt="Company Logo 3" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo7} alt="Company Logo 3" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo8} alt="Company Logo 3" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo9} alt="Company Logo 3" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo10} alt="Company Logo 3" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo11} alt="Company Logo 3" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo12} alt="Company Logo 3" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo1} alt="Company Logo 1" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo2} alt="Company Logo 2" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo3} alt="Company Logo 3" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo4} alt="Company Logo 3" className="img-fluid" />
        </Col>
        <Col xs={6} md={2} lg={2} className="mb-3 justify-content-center align-items-center text-center">
          <img src={logo5} alt="Company Logo 3" className="img-fluid" />
        </Col>
       

      </Row>
    </Container>
  );
};

export default FeaturedSection;
