import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Countdown from "react-countdown";
import { API } from '../../../services/api/api';
import { storeTimer } from '../../../redux/TimerRedux';
import { useDispatch } from 'react-redux';
const LiveAution = props => {
    const data = props.data;
    const [biddings, setBiddings] = useState([])

    const allBiddings = () => {
        API.getAllBiddings().then((resp) => {
            if (resp.status == 200) {
                setBiddings(resp.data.data)
            }
        })
    }



    useEffect(() => {
        allBiddings()
    }, [])

    return (
        <section className="tf-live-auctions tf-section bg-color-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sc-heading style-2 has-icon">
                            <div className="content-left">

                                <div className="inner">
                                    <div className="group">
                                        <div className="icon"><i className="ripple"></i></div>
                                        <h3>Live Auctions</h3>
                                    </div>
                                    <p className="desc">Most popular gaming digital nft market place </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="swiper-container">
                            <div className="swiper-wrapper live-auc">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={30}

                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        767: {
                                            slidesPerView: 2,
                                        },
                                        991: {
                                            slidesPerView: 3,
                                        },
                                        1300: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                    navigation
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                >
                                    {
                                        biddings?.map((item, index) => (
                                            <SwiperSlide key={index}>
                                                <LiveAutionItem item={item} />
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const LiveAutionItem = props => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleNavigation = async (id, endTime) => {
        dispatch(storeTimer(endTime))
        navigate(`/item-details/${id}`)

    }
    return (
        <div div className="swiper-slide" >
            <div className="slider-item">
                <div className="sc-product-item">
                    <div className="product-img">
                        <img src="data:image/png;base64,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" alt="NFTYART" />
                        <div className="countdown">
                            <Countdown date={props.item.endTime}>
                                <span>You are good to go!</span>
                            </Countdown>
                        </div>
                        <button onClick={() => handleNavigation(props.item._id, props.item.endTime)} to={`/item-details/${props.item._id}`}
                            className="sc-button style letter"><span onClick={() => storeTimer(props.item.endTime)} >Place Bid</span></button>
                        <label>{props.item.tags}</label>
                    </div>
                    <div className="product-content">
                        <h5 className="title"><Link to="/item-details">This is Title</Link> </h5>
                        <div className="product-author flex">
                            <div className="avatar">
                                <img src="data:image/jpeg;base64,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" alt="NFTYART" />
                            </div>
                            <div className="infor">
                                <div className="author-name"><Link to="/authors">Donald</Link></div>
                                <span>Creator</span>
                            </div>
                        </div>
                        <div className="product-price">
                            <div className="title">Current Bid</div>
                            <div className="price">
                                <span>{props.item.price}</span>
                                <span>= 20$</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default LiveAution;
