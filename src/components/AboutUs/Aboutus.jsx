import React from 'react'
import image from "../../assets/Aboutus/pexels-motional-studio-1081685.jpg"
import "./Aboutus.css"
import ImgTeam1 from "../../assets/images/Artist/author/1.jpg"
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import AboutUsInfo from '../AboutUsInfo/AboutUsInfoSec'
import { faFacebook, faThreads, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FaqSection from '../FAQS/FaqSection'
const team=[
  {
    id:1,
    name:"Sabil Ahmad",
    subtitle:"Manager",
    image:ImgTeam1
  },
  {
    id:1,
    name:"Sabil Ahmad",
    subtitle:"Manager",
    image:ImgTeam1
  },
  {
    id:1,
    name:"Sabil Ahmad",
    subtitle:"Manager",
    image:ImgTeam1
  },
  {
    id:1,
    name:"Sabil Ahmad",
    subtitle:"Manager",
    image:ImgTeam1
  },
  {
    id:1,
    name:"Sabil Ahmad",
    subtitle:"Manager",
    image:ImgTeam1
  },
  {
    id:1,
    name:"Sabil Ahmad",
    subtitle:"Manager",
    image:ImgTeam1
  },
  {
    id:1,
    name:"Sabil Ahmad",
    subtitle:"Manager",
    image:ImgTeam1
  },
]
const info =[
    {
        id:1,
        title:"IT Consultant",
        surpara:"We believe brand interaction is key to communication and right accomplishment of Projects. Real innovations and positive customer experiences."
    },
    {
        id:2,
        title:"IT Consultant",
        surpara:"We believe brand interaction is key to communication and right accomplishment of Projects. Real innovations and positive customer experiences."
    },
    {
        id:3,
        title:"IT Consultant",
        surpara:"We believe brand interaction is key to communication and right accomplishment of Projects. Real innovations and positive customer experiences."
    },
    {
        id:4,
        title:"IT Consultant",
        surpara:"We believe brand interaction is key to communication and right accomplishment of Projects. Real innovations and positive customer experiences."
    },
    {
        id:5,
        title:"IT Consultant",
        surpara:"We believe brand interaction is key to communication and right accomplishment of Projects. Real innovations and positive customer experiences."
    },
    {
        id:6,
        title:"IT Consultant",
        surpara:"We believe brand interaction is key to communication and right accomplishment of Projects. Real innovations and positive customer experiences."
    },
    {
        id:7,
        title:"IT Consultant",
        surpara:"We believe brand interaction is key to communication and right accomplishment of Projects. Real innovations and positive customer experiences."
    },
    {
        id:7,
        title:"IT Consultant",
        surpara:"We believe brand interaction is key to communication and right accomplishment of Projects. Real innovations and positive customer experiences."
    },
]
const Aboutus = () => {
  return (
    <>
    <Header/>
        <section  >
    <div className='container my-5'  >
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

                <img className='sec-land-img' src={image} alt="" />
            </Col>
            </div>
    </div>
  
            </section>
            <section className='team-section-2  aboutus-container '>
          
          <div className="container">
                <div className="row text-center py-5">
                    <div className="col-12">
                        <h4 className='my-4'>
                    <Badge  bg="danger">NftyArt</Badge>
                    </h4>
                    </div>

                    <div className="col-12"><h2 style={{
                      color:"white"
                    }}>Features</h2></div>
                    <div className="col-12 mb-5"><p>Our IT services converge business and technology experts to help to manage business categories</p></div>


                </div>
           
            </div>
            <div className="container ">
      <div className="row justify-content-center">
        {/* Specialist Card 1 */}
        {
            info.map((item,index)=>(
                <div key={index} className="col-12 col-sm-6 col-lg-6 mb-4">
                <div className="card shadow-sm">
                  
                  <div className="card-body text-center">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-text">{item.surpara}</p>
                  </div>
                </div>
              </div>
            ))
        }
     
     
        {/* Repeat for other specialists */}
      </div>
    </div>
            </section> 
          <section className='team-section '>
            
            <div className="container">
                <div className="row text-center py-5">
                    <div className="col-12">
                        <h4>
                    <Badge  bg="primary">New</Badge>
                    </h4>
                    </div>

                    <div className="col-12"><h3>Entrust Your Project To Our Specialists</h3></div>
                    <div className="col-12 mb-5"><p>Our IT services converge business and technology experts to help to manage business categories</p></div>



                </div>
           
            </div>
            
            <div className="container team-cont ">
      <div className="row team-row justify-content-center">
        {/* Specialist Card 1 */}
        {
          team.map((item,index)=>(
            <div className="col-12 my-5 col-sm-6 col-lg-3 mb-4">
            <div className="card shadow-sm" >
              <img src={item.image} className="card-img-top" alt="Muhammad Mubeen" />
              <div className="card-body text-center">
                <h4 className="card-title">{item.name}</h4>
                <p className="card-title">{item.subtitle}</p>
              </div>
              <div className='px-3'>
              <FontAwesomeIcon className='icon' icon={faTwitter} />
              <FontAwesomeIcon className='icon' icon={faFacebook} />
              <FontAwesomeIcon className='icon' icon={faThreads} />
              </div>
            </div>
          </div>
          ))
        }
     
     
      
        {/* Repeat for other specialists */}
      </div>
    </div>
            </section>  
          
 
        
    <Footer/>
    </>
  )
}

export default Aboutus