import React from 'react'
import config from '../lib/config'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CustomerSay = ({ heading }) => {
    const { basename } = config;
    return (
        <div className="customers__says">
            <h2>{heading}</h2>
            <div className="customers__says__row">
            <Swiper
                spaceBetween={0}
                slidesPerView={4}
                breakpoints={{
                    // 660: { slidesPerView: 3 },
                    // 1010: { slidesPerView: 4 },
                    // 1110: { slidesPerView: 5 },
                    // 1260: { slidesPerView: 6 }
                }}
            >
                    {[...new Array(4)].map((e, i) => (
                        <SwiperSlide key={i}>
                            {/* <div className='customers__says__col__wrapper'> */}
                                <div className="customers__says__col" key={i}>
                                    <img src={`${basename}/assets/img/Frame.svg`} alt="" />
                                    <p>Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. </p>
                                    <Link className='hover' to="/client/ritu-kumar">Ritu Kumar</Link>
                                </div>
                            {/* </div> */}
                        </SwiperSlide>
                    ))}
            </Swiper>
                </div>
        </div>
    )
}

export default CustomerSay