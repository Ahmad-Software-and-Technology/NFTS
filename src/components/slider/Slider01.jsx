import React from 'react';
import { Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { Navigation, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const Slider01 = props => {
    const data = props.data
    return (
        <section className="tf-slider slider">
            <Swiper
                modules={[Navigation, Scrollbar, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                scrollbar={{ draggable: true }}
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SliderItem item={item} />
                        </SwiperSlide>

                    ))
                }
            </Swiper>
        </section>
    )
};

const SliderItem = props => (

    <div className="swiper-container ">
        <div className="swiper-wrapper">
            <div className="swiper-slide">
                <div className="slider-item">
                    <div className="overlay"></div>
                    <div className="slider-inner  home-1">
                   
                        <div className="slider-content">
                            <h1 className="heading">{props.item.title}</h1>
                            <p className="sub-heading">{props.item.description}</p>
                            <div className="button-slider">
                                <Link to="/explore-01"
                                    className="sc-button btn-bordered-white style letter my-2"><span>Explore
                                        More</span></Link>
                                <Link to="/create-item"
                                    className="sc-button btn-bordered-white style file my-2"><span>Upload
                                        ArtWork</span></Link>
                            </div>
                        </div>
                  
                   
                        <div className="slider-img ">
                            <div className="img-home-1 "><img src={props.item.img} /></div>
                        </div>
              
                    </div>
                </div>
            </div>
        </div>
    </div>

)

export default Slider01;
