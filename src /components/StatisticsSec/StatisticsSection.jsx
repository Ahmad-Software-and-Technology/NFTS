import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './StatisticsSection.css'; // Make sure to create and link this CSS file

const StatisticsSection = () => {
  return (
    <Container className="statistics-section my-5 px-5">
      <Row className="text-center px-5">
        <Col md={4}>
          <div className="statistic static-all">
            <h1>$64.1B</h1>
            <p>Global sales of fine art in 2019.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="statistic static-all">
            <h1>$1.7T</h1>
            <p>Art & collectables current market cap.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="statistic">
            <h1>86%</h1>
            <p>Of wealth managers surveyed recommend investing in fine art.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default StatisticsSection;
