


import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './AboutUsInfoSec.css'; // This is where you will write your CSS
const timelinedata = [
  {
    id:1,
    number:1,
    title:"Market Research and Conceptulization"

  },
  {
    id:2,
    number:2,
    title:"Platform Development and Testing"

  },
  {
    id:3,
    number:3,
    title:"Offical Launch and Marketing"

  },
  {
    id:4,
    number:4,
    title:"Feature Expansion and Artist Collaborattion"

  },
  {
    id:5,
    number:5,
    title:"User Community Growth and Engagement"

  },
  {
    id:6,
    number:6,
    title:"Integration of New Technologies"

  },
  {
    id:7,
    number:7,
    title:"Sustainability and Long-Term Innovation"

  },
]
const AboutUsInfo = () => {
  return (
    <div className='timeline-parent' >
    <Container className='mt-5'>
      <Row >
        <Col className='text-center my-5'>
        <h1>About Us</h1>

        </Col>
      </Row>
    </Container>
    <div className="timeline">
      {
        timelinedata.map((item,index)=>(
          <div className="checkpoint" key={item.id}>
          <div className="date-label ">{/* Add your date here */}February 01, 2022</div>
            <div className='data-content py-5'>
              <h4 className='pt-2'>{item.title}</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis mollitia laborum nemo odit eos, esse cumque, ratione incidunt nulla a inventore quas impedit sit labore alias eius veniam velit autem?</p>
            </div>
          </div>
        ))
      }
     
      
    </div>
    </div>
  );
}

export default AboutUsInfo;







