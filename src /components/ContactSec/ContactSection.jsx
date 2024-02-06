import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../../assets/titlepic (1).png"
import img2 from "../../assets/getintouch (1).png"
import "./ContactSec.css"
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FaqSection from '../FAQS/FaqSection';
import { faEnvelope, faHeadphones, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const ContactSection = () => {
  const [dataSocial] = useState([
    {
        icon: 'fab fa-facebook-f'
    },
    {
        icon: 'fab fa-twitter'
    },
    {
        icon: 'fab fa-linkedin-in'
    },
    {
        icon: 'fab fa-youtube'
    },
])
  return (
    <>
    <Header/>
    <section className='py-5 contact-section'>
    <div className='container aboutus-container my-5'>
        <div className="row land-row flex">
            <Col sm={12} xs={12} md={12} lg={6} xl={6} className="col-6  land-col ">
                <h1 className='py-5 heading' >NFTYART</h1>
                <p>Subscribe to super-exclusive drop list and be the first to know about upcoming drops.Subscribe to super-exclusive drop list and be the first to know about upcoming drops.Subscribe to super-exclusive drop list and be the first to know about upcoming drops.Subscribe to super-exclusive drop list and be the first to know about upcoming drops

                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum voluptatem ipsum, fuga nihil odio natus, veritatis blanditiis id, aliquam autem iste provident unde consectetur. Fuga debitis nesciunt recusandae asperiores!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloribus corrupti, nesciunt sed nostrum sit et esse error molestias laudantium officia facere enim eos obcaecati quis ratione quam cum.
                </p>
                
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} className="col-6  text-center my-2">

                <img className='sec-land-img' src={img1} alt="" />
            </Col>
            </div>
    </div>
            </section>
            {/* <FaqSection/> */}
    <Container  className="p-5 bg-light contact-sec">

      <Row>
        <Col xs={12} md={6} className="d-flex  justify-content-center align-item-center ">
            {/* <Image  src={img2}  className=" contact-img h-100" /> */}
            <div className='getIntouch_col_sec   '>
              <h2 className='getIntouch_heading'>Contact Us</h2>
                <p className='getIntouch_subtitle'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quaerat optio sunt? Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
                <div className='getIntouch_content'>
                <p > <strong><FontAwesomeIcon icon={faLocationDot}/> </strong> house#141 Street 11,California </p>
                <p ><strong> <FontAwesomeIcon icon={faEnvelope} /></strong>lorem@gmail.com</p>
                <p ><strong><FontAwesomeIcon icon={faHeadphones} /></strong>+52-12314213</p>
                </div>
                <div className="widget-social">
                                    <ul>
                                        {
                                            dataSocial.map((item,index)=> (
                                                <li  key={index}><Link to="#"><i style={{
                                                  color:"black"
                                                }}  className={item.icon}></i></Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
            </div>
        </Col>
        <Col xs={12} md={6} className='py-5 mt-5 contact-col'>
          <h3>Get in touch!</h3>
          <Form >
            <Form.Group controlId="formBasicName" className='py-4 form-grp'>
            <Form.Label className='mx-1 my-1'><strong>Name</strong></Form.Label>
              <Form.Control type="text"  className='form-control' required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className='py-4 form-grp'>
            <Form.Label className='mx-1 my-2'><strong>Email</strong></Form.Label>
              <Form.Control type="email"  className='form-control'  required />
            </Form.Group>

            <Form.Group controlId="formBasicMessage" className='py-4 form-grp'>
            <Form.Label className='mx-1 my-2'><strong>Message</strong></Form.Label>
              <Form.Control as="textarea" className='form-control contact-msg-sec px-2' placeholder="Your message *" rows={3}   required />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className='py-4 mx-4  '>
              <Form.Check type="checkbox"   label="I agree to Privacy Policy and terms and conditions." required />
            </Form.Group>

            <div className="">
                  <button
                    className=" wallet d-flex fluid w-100 justify-content-center  style-2"
                  
         
                  >
          
                    <span   style={{
                      color:"white"
                    }} >Contact with us now</span>
                  </button>
                </div>
          </Form>
        </Col>
      </Row>
    </Container>
    
    <Footer/>
    </>
  );
};

export default ContactSection;
