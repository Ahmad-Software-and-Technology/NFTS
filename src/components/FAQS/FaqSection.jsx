import React, { useState } from 'react';
import { Col,Card, Accordion, Button } from 'react-bootstrap';
import "./FaqSection.css"
import img1 from "../../assets/getintouch (1).png"
const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className='py-5'>
    <div className='container  my-5'>
        <div className="row  flex">

            <Col sm={12} xs={12} md={12} lg={6} xl={6} className="col-6 ">
            <div className="faq-container">
      <h2>Faqs</h2>
      <div className="faq" onClick={() => handleToggle(1)}>
        <div className="faq-question">
          What services does We provide?
        </div>
        {activeIndex === 1 && (
          <div className="faq-answer">
            We offer a comprehensive suite of services, including software development...
          </div>
        )}
      </div>
  
      <div className="faq" onClick={() => handleToggle(2)}>
        <div className="faq-question">
          What services does We provide?
        </div>
        {activeIndex === 2 && (
          <div className="faq-answer">
            We offer a comprehensive suite of services, including software development...
          </div>
        )}
      </div>
      <div className="faq" onClick={() => handleToggle(3)}>
        <div className="faq-question">
          What services does We provide?
        </div>
        {activeIndex === 3 && (
          <div className="faq-answer">
            We offer a comprehensive suite of services, including software development...
          </div>
        )}
      </div>
      <div className="faq" onClick={() => handleToggle(4)}>
        <div className="faq-question">
          What services does We provide?
        </div>
        {activeIndex === 4 && (
          <div className="faq-answer">
            We offer a comprehensive suite of services, including software development...
          </div>
        )}
      </div>
      {/* Repeat for each FAQ */}
    </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6} xl={6} className="col-6  text-center my-2">

                <img className='sec-land-img' src={img1} alt="" />
            </Col>
            </div>
    </div>
            </section>
  );
}

export default FaqSection;
