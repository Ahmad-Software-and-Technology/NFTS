import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ArtSection.css'; // Make sure to create and link this CSS file

const ArtSection = () => {
  return (
    <section className='art-section'>
    <Container className="  pt-5">
      <Row className="align-items-center">
        <Col md={12} className="title-col">
          <h3> What Make Us Unique</h3>
          <hr className="title-underline" />
        </Col>
        <Col md={12} className="text-col text-center">
          <h5>Unleashing Uniqueness:  What Sets NFTyART A part</h5>
          <p className='py-2   my-4 art-content '>
          NFTyART Marketplace stands out in the vibrant landscape of NFT platforms through a combination of distinctive features and a visionary approach. Our uniqueness lies in the convergence of cutting-edge technology, artist empowerment, and community building, creating an ecosystem that transcends traditional NFT experiences. Get ready to explore what makes NFTyART truly exceptional
          </p>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default ArtSection;
