import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
// import config from '../lib/config';
import { Navigation } from 'swiper';

const PremiumService = ({ children }) => {

    // const { basename } = config;

    return (
        <div className='premium__service'>
            <div className="premium__service__heading">
                <h2>Plumber Services</h2>
                <span>Premium Services</span>
            </div>
            <button className="swiper-button-prev">prev</button>
            <div className="premium__service__swiper">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={6}
                    modules={[Navigation]}
                    navigation
                >
                    {[...new Array(15)].map((e, i) => (
                        <SwiperSlide key={i}>
                            <div className="premium__service__products__col">
                                {/* <img src={`${basename}/assets/img/appliances/Rectangle 1918.png`} alt="" /> */}
                                <img src={`https://s3-alpha-sig.figma.com/img/b7a8/37ef/24c64cd29b53cf5dec34b29954a88f2f?Expires=1662940800&Signature=Op9mFaz2FbEuL~HPdvsy~ekME56E-5Nh9zUM0v4LJoNQ36vJtwCLqGX532o8wP6suS~4GQHGHCyqqKGsVTO7DNARbDjxV2NfVttiGdcHuo~Qp1g3Ut9OaVM53iGIRL5cpozuiamhucTro5f-pNeg0oLCcBTMLiMsTno6VO7Awi1-bRNkPiB4C4wzu9MXTZ3AZTdI5o~mgzMBrjzm5zeQVVlMBYnP1Yc9-YQ1FvbtRu8hK8lwhY0LMxqQKMAdZqiSywl9m74QXsU6EOBnTnHrpoYryF8bRjjqXGbu8p2qN8Uwz-SDyE15uBlcxi9MDg47QOnv1JA-FLeiE~gfGOqyYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA`} alt="" />
                                <strong>MCB &amp; Fuse</strong>
                                <span>Repairing &amp; Installation</span>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default PremiumService