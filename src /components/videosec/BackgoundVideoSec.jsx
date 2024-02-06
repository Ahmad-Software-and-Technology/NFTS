import React from 'react'
import { Container } from 'react-bootstrap';
import videosources from "./vid.mp4"
import "./BackgroundVideo.css"
import img1 from "../../assets/logo.png"
const BackgoundVideoSec = () => {

  return (
    <div className="fullscreen-bg">
    <video loop autoPlay muted className="fullscreen-bg__video">
      <source src={videosources} type="video/mp4" />
    </video>
    <div className="video-overlay"></div>
    <Container className="h-100 d-flex justify-content-center align-items-center">
      <div className="overlay-text">
        <img src={img1}/>
      </div>
    </Container>
  </div>
  )
}

export default BackgoundVideoSec