import React from 'react'
import "./LogoSliderSec.css"
import image1 from "../../assets/LOGOS/ARTFIethereum1686129331935.webp"
import image2 from "../../assets/LOGOS/ARTFIpolygon1686129345542.webp"
import image3 from "../../assets/LOGOS/tether-usdt-logo.png"
import image4 from "../../assets/LOGOS/solana-sol-logo.png"
const LogoSliderSec = () => {
  return (
    <div className='logos'>

        <div className="logo-slide">
            <img src={image1} alt="logo" />
            <img src={image2} alt="logo" />
            <img src={image3} alt="logo" />
            <img src={image4} alt="logo" />
            <img src={image1} alt="logo" />
            <img src={image2} alt="logo" />
            <img src={image3} alt="logo" />
            <img src={image4} alt="logo" />
            <img src={image1} alt="logo" />
            <img src={image2} alt="logo" />
            <img src={image3} alt="logo" />
            <img src={image4} alt="logo" />
            <img src={image1} alt="logo" />
            <img src={image2} alt="logo" />
            <img src={image3} alt="logo" />
            <img src={image4} alt="logo" />
        </div>
       
    </div>
  )
}

export default LogoSliderSec