


import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './TimelineSec.css'; // This is where you will write your CSS
import Header from '../header/Header';
import Footer from '../footer/Footer';
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
const Roadmap = () => {
  return (
    <>
    <Header/>
    <div className='timeline-parent' >
    <Container >
      <Row >
        <Col className='text-center timeline-col '>
        <h1>ROADMAP</h1>

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
    <Footer/>
    </>
  );
}

export default Roadmap;









// // React Component File: TimelineSection.js
// import React from 'react';
// import styled from 'styled-components';
// import img from "../../assets/roadmap-images/roadmap-2.webp"
// // Styled components
// const TimelineContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   min-height:70vh;
//   padding: 20px;
//   background-color: #000;
//   color: #fff;
// `;

// const TimelineItem = styled.div`
//   display: flex;
//   align-items: center;

//   margin: 50px 0;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const ItemContent = styled.div`
//   width: 10%;
//   padding:0px;
//   @media (max-width: 768px) {
//     width: 100%;
//     text-align: center;
//     margin: 10px 0;
//   }
// `;

// const ImageContainer = styled.div`
//   width: 45%;

//   @media (max-width: 768px) {
//     width: 70%;
//   }

//   img {
//     max-width: 100%;
//     height: auto;
//   }
// `;

// const Line = styled.div`
//   height: 2px;
//   background-color: #fff;
//   position: relative;
//   width: 10%;
  
  
//   margin-left:20px;
//   margin-right:20px;
//   &:before {
//     content: '';
//     position: absolute;
//     top: -5px;
//     left: ${(props) => props.position};
//     background-color: #ffd700;
//     width: 10px;
//     height: 10px;
//     border-radius: 50%;
//   }
// `;

// // TimelineSection Component
// const TimelineSection = () => {
//   return (
//     <TimelineContainer>
//       <div className='my-5'>
//         <h1>ROAD MAP</h1>
//       </div>
//       <TimelineItem>
//         <ItemContent>
//           <h1>01</h1>
//           <p>Market Research and Conceptulization</p>
//         </ItemContent>
//         <Line position="50%" />
//         <ItemContent>
//           <h1>02</h1>
//           <p>Platform Development and Testing</p>
//         </ItemContent>
//         <Line position="50%" />
//         <ItemContent className='pb-5'>
//         <h1 >03</h1>
//           <p>Offical Launch and Marketing</p>
//         </ItemContent>
     
//         <Line position="50%" />
//         <ItemContent>
//           <h1>04</h1>
//           <p>Feature Expansion and Artist Collaborattion</p>
//         </ItemContent>
//         <Line position="50%" />
//         <ItemContent>
//           <h1>05</h1>
//           <p>User Community Growth and Engagement</p>
//         </ItemContent>
//         <Line position="50%" />
//         <ItemContent  className='pb-5'>
//           <h1>06</h1>
//           <p >Integration of New Technologies</p>
//         </ItemContent>
//         <Line position="50%" />
//         <ItemContent>
//           <h1>07</h1>
//           <p>Sustainability and Long-Term Innovation</p>
//         </ItemContent>
//       </TimelineItem>
//       <ImageContainer>
        
//       </ImageContainer>
//     </TimelineContainer>
//   );
// };

// export default TimelineSection;
