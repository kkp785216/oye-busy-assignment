import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ServiceCard = () => {
    return (
        <div className="servicecard">
            <Swiper
                spaceBetween={33}
                slidesPerView={4}
                breakpoints={{
                    0: { slidesPerView: 1.2 },
                    360: { slidesPerView: 1.5 },
                    460: { slidesPerView: 2 },
                    560: { slidesPerView: 2.5 },
                    660: { slidesPerView: 3 },
                    767: { slidesPerView: 3.5 },
                    850: { slidesPerView: 4 },
                    // 1110: { slidesPerView: 5 },
                    // 1260: { slidesPerView: 6 }
                }}
            >
                {[1, 2, 3, 4].map((e, i) => (
                    <SwiperSlide key={i}>
                        <div className="servicecard__col">
                            <div className="servicecard__img"></div>
                            <strong>Professional Deep Cleaning</strong>
                            <span>For spring  clean for  end of  lease clean</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ServiceCard