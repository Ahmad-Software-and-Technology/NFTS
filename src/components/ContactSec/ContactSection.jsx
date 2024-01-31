import React from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "../../assets/titlepic (1).png"
import img2 from "../../assets/getintouch (1).png"
import "./ContactSec.css"
import Header from '../header/Header';
import Footer from '../footer/Footer';
import FaqSection from '../FAQS/FaqSection';
const ContactSection = () => {
  return (
    <>
    <Header/>
    <section className='py-5'>
    <div className='container aboutus-container my-5'>
        <div className="row land-row flex">
            <Col sm={12} xs={12} md={12} lg={6} xl={6} className="col-6  land-col ">
                <h2 className='py-5'>NFTYART</h2>
                <p>Subscribe to super-exclusive drop list and be the first to know about upcoming drops.Subscribe to super-exclusive drop list and be the first to know about upcoming drops.Subscribe to super-exclusive drop list and be the first to know about upcoming drops.Subscribe to super-exclusive drop list and be the first to know about upcoming drops</p>
                <div className="flex px-2">
                <button className='sc-button  my-2 mr-3'>
                Explore 
                </button>
                <button className='sc-button  my-2'>
                Explore 
                </button>
                </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} className="col-6  text-center my-2">

                <img className='sec-land-img' src={img1} alt="" />
            </Col>
            </div>
    </div>
            </section>
            <FaqSection/>
    <Container fluid className="p-5 bg-light contact-sec">

      <Row>
        <Col xs={12} md={6} className="d-flex  justify-content-center align-item-center">
          <Image  src={img2}  className=" contact-img h-100" />
        </Col>
        <Col xs={12} md={6} className='py-5 mt-5 contact-col'>
          <h3>Get in touch!</h3>
          <Form >
            <Form.Group controlId="formBasicName" className='py-4 form-grp'>
            <Form.Label className='mx-1 my-1'><strong>Name</strong></Form.Label>
              <Form.Control type="text" placeholder="Name *" className='form-control' required />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className='py-4 form-grp'>
            <Form.Label className='mx-1 my-2'><strong>Email</strong></Form.Label>
              <Form.Control type="email"  className='form-control' placeholder="Email *" required />
            </Form.Group>

            <Form.Group controlId="formBasicMessage" className='py-4 form-grp'>
            <Form.Label className='mx-1 my-2'><strong>Message</strong></Form.Label>
              <Form.Control as="textarea" className='form-control contact-msg-sec' placeholder="Your message *" rows={10}   required />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className='py-4 mx-4  '>
              <Form.Check type="checkbox"  label="I agree to Privacy Policy and terms and conditions." required />
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
