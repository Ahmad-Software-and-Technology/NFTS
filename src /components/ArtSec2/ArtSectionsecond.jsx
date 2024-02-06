import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ArtSectionsecond.css'; // Make sure to create and link this CSS file

const ArtSectionsecond = () => {
  return (
    <section>
    <Container className="art-section-2 mt-5 pt-5">
      <Row className="align-items-center">
        <Col md={12} className="title-col">
          <h3> ART Token: Empowering the NFTyART Community

</h3>
          <hr className="title-underline" />
        </Col>
        <Col md={12} className="text-col text-center">
          <h5>"Unlocking the World of ART"</h5>
          <p className='py-2 art-content my-3'>
          The NFTyART ecosystem is driven by a powerful engine of collaboration and empowerment, embodied in our governance token. This innovative token, a cornerstone of our platform, serves as a mechanism to amplify the voices and decisions of our community members.
          </p>
        </Col>
      </Row>
    </Container>
    </section>
  );
};

export default ArtSectionsecond;
