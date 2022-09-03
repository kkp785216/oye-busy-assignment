import React, { useEffect, useRef } from 'react'
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';

const PremiumService = ({ heading, children }) => {

    const premiumRef = useRef();
    useEffect(() => {
        premiumRef.current.append(premiumRef.current.querySelector('.swiper-button-prev'));
        premiumRef.current.append(premiumRef.current.querySelector('.swiper-button-next'));
    }, []);

    return (
        <div className='premium__service'>
            <div className="premium__service__heading">
                <h2>{heading}</h2>
                <span>Premium Services</span>
            </div>
            <div ref={premiumRef} className="premium__service__swiper">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={6}
                    modules={[Navigation]}
                    navigation
                >
                    {children}
                </Swiper>
            </div>
        </div>
    )
}

export default PremiumService