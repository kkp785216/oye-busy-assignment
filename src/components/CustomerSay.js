import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import config from '../lib/config'
import { Link } from 'react-router-dom';

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
                        0: { slidesPerView: 1.2 },
                        360: { slidesPerView: 1.5 },
                        540: { slidesPerView: 2 },
                        630: { slidesPerView: 2.5 },
                        700: { slidesPerView: 3 },
                        767: { slidesPerView: 3.5 },
                        860: { slidesPerView: 4 },
                    }}
                >
                    {[...new Array(4)].map((e, i) => (
                        <SwiperSlide key={i}>
                            <div className="customers__says__col" key={i}>
                                <img src={`${basename}/assets/img/Frame.svg`} alt="" />
                                <p>Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. </p>
                                <Link className='hover' to="/client/ritu-kumar">Ritu Kumar</Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default CustomerSay