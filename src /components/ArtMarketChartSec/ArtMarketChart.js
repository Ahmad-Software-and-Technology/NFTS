import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import "./ArtMarketChart.css"
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['1995', '2000', '2005', '2010', '2015', '2020'],
  datasets: [
    {
      label: 'CONTEMPORARY ART: 13.6% ANNUAL RETURN',
      data: [0, 10, 15, 20, 25, 30],
      fill: false,
      borderColor: 'purple',
      tension: 0.1
    },
    {
      label: 'S&P 500: 9.5% ANNUAL RETURN',
      data: [0, 7, 13, 18, 22, 26],
      fill: false,
      borderColor: 'orange',
      tension: 0.1
    }
  ]
};

const options = {
  plugins: {
    legend: {
      position: 'bottom'
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const ArtMarketChart = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Line data={data} options={options} />
        </Col>
      </Row>
    </Container>
  );
};

export default ArtMarketChart;
