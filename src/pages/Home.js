import React from 'react'
import config from '../lib/config'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Heading1 from '../components/Heading1';

const Home = () => {
  const { basename } = config;
  return (
    <div className="home">
      <div className='home__top1'>
        <div className="home__search__container" style={{ /*backgroundImage: `url('${basename}/assets/img/cosmetologist-cleaning-face-woman-beauty-salon (2) 1.jpg')`*/ }}>
          <img src={`${basename}/assets/img/cosmetologist-cleaning-face-woman-beauty-salon (2) 1.jpg`} width="100%" alt="" />
          <div className="home__search__wrapper">
            <h3>Home services,<br />on demand</h3>
            <div className='home__search__form__wrapper'>
              <form>
                <img src={`${basename}/assets/img/search.svg`} alt="" />
                <input type="text" placeholder='Search for a service' />
              </form>
              <span>Examples: <span>Salon, Women&apos;s hair, Men&apos;s grooming</span> &amp; Many more..</span>
            </div>
          </div>
        </div>
        <div className="home__looking__container">
          <div>
            <div className="home__looking__heading">
              <h3>What are you looking for?</h3>
              <span>FLAT $400 OFF <img src={`${basename}/assets/img/Polygon 2.svg`} alt="" /></span>
            </div>
            <div className="home__looking__products">
              <div className="home__looking__products__col">
                <img src={`${basename}/assets/img/looking/Category_Salonlooking1.svg`} alt="" />
                <span>Salon at Home</span>
              </div>
              <div className="home__looking__products__col">
                <img src={`${basename}/assets/img/looking/Category_Electricianlooking2.svg`} alt="" />
                <span>Electrician</span>
              </div>
              <div className="home__looking__products__col">
                <img src={`${basename}/assets/img/looking/Category_Plumberlooking3.svg`} alt="" />
                <span>Plumber</span>
              </div>
              <div className="home__looking__products__col">
                <img src={`${basename}/assets/img/looking/Category_CCTVlooking4.svg`} alt="" />
                <span>CCTV</span>
              </div>
              <div className="home__looking__products__col">
                <img src={`${basename}/assets/img/looking/Category_AClooking5.svg`} alt="" />
                <span>AC Service</span>
              </div>
              <div className="home__looking__products__col">
                <img src={`${basename}/assets/img/looking/Category_Packer&Moverlooking6.svg`} alt="" />
                <span>Packers &amp; Movers</span>
              </div>
              <div className="home__looking__products__col">
                <img src={`${basename}/assets/img/looking/Category_Cleaninglooking7.svg`} alt="" />
                <span>Cleaning</span>
              </div>
              <div className="home__looking__products__col">
                <img src={`${basename}/assets/img/looking/Category_Painterlooking8.svg`} alt="" />
                <span>House Painting</span>
              </div>
              <div className="home__looking__products__col">
                <img src={`${basename}/assets/img/looking/Category_Home_Appliancelooking9.svg`} alt="" />
                <span>Home Appliances</span>
              </div>
              <div className="home__looking__products__col">
                <img src={`${basename}/assets/img/looking/Disinfectionlooking10.svg`} alt="" />
                <span>Disinfection</span>
              </div>
              <div className="home__looking__products__col">
                <img src={`${basename}/assets/img/looking/Category_Pest_controllooking11.svg`} alt="" />
                <span>Pest Control</span>
              </div>
              <div className="home__looking__products__col">
                <img src={`${basename}/assets/img/looking/Category_Carpenterlooking12.svg`} alt="" />
                <span>Carpenter</span>
              </div>
            </div>
          </div>
          <div className="home__looking__swiper">
            <Swiper
              spaceBetween={11}
              slidesPerView={2.4}
            >
              <SwiperSlide><img src={`${basename}/assets/img/looking/1.png`} width="100%" alt="" /></SwiperSlide>
              <SwiperSlide><img src={`${basename}/assets/img/looking/2.png`} width="100%" alt="" /></SwiperSlide>
              <SwiperSlide><img src={`${basename}/assets/img/looking/3.png`} width="100%" alt="" /></SwiperSlide>
              <SwiperSlide><img src={`${basename}/assets/img/looking/4.png`} width="100%" alt="" /></SwiperSlide>
              <SwiperSlide><img src={`${basename}/assets/img/looking/5.png`} width="100%" alt="" /></SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div className="home__tranding">
        <Heading1>
          <h2>Trending Services</h2>
          <span>Premium Home Services</span>
        </Heading1>
        <div className="home__tranding__products">
          <div className="home__tranding__products__col">
            <img src={`${basename}/assets/img/trending/Rectangle 19.png`} alt="" />
            <span>Air-Conditioner Services</span>
          </div>
          <div className="home__tranding__products__col">
            <img src={`${basename}/assets/img/trending/Rectangle 20.png`} alt="" />
            <span>AC Installation</span>
          </div>
          <div className="home__tranding__products__col">
            <img className='sofa' src={`${basename}/assets/img/trending/image 12.png`} alt="" />
            <span>Sofa Cleaning Service</span>
          </div>
          <div className="home__tranding__products__col">
            <img src={`${basename}/assets/img/trending/image 13.png`} alt="" />
            <span>Home Deep Cleaning Service</span>
          </div>
          <div className="home__tranding__products__col">
            <img src={`${basename}/assets/img/trending/Rectangle 19.png`} alt="" />
            <span>Air-Conditioner Services</span>
          </div>
        </div>
      </div>
      <div className="home__sameday">
        <Heading1>
          <h2>Same Day Service</h2>
          <span>Premium Home Services</span>
        </Heading1>
        <div className="home__sameday__products">
          <div className="home__sameday__products__col active">
            <img src={`${basename}/assets/img/sameday/Carpenter-PNG-Image.png`} alt="" />
            <span>Carpentery Services</span>
          </div>
          <div className="home__sameday__products__col">
            <img src={`${basename}/assets/img/sameday/kisspng-dick-rosher-plumbing-inc-plumber-drain-leak-plumber-5abfda3c8ab124 1.png`} alt="" />
            <span>Plumbing Services</span>
          </div>
          <div className="home__sameday__products__col">
            <img src={`${basename}/assets/img/sameday/kisspng-technician-plumber-electrician-home-repair-mainten-5ae1b847d030b7 1.png`} alt="" />
            <span>Electrical Services</span>
          </div>
          <div className="home__sameday__products__col">
            <img src={`${basename}/assets/img/sameday/pngegg.png`} alt="" />
            <span>Painting Services</span>
          </div>
          <div className="home__sameday__products__col">
            <img className='pubg' src={`${basename}/assets/img/sameday/kisspng-insecticide-pesticide-herbicide-sprayer-5d0e1b4badf171.png`} alt="" />
            <span>Pest Control Serviecs</span>
          </div>
        </div>
      </div>
      <div className="safeservice">
        <div className='safeservice__row'>
          <h2>100% Safe Services</h2>
          <ul>
            <div>
              <li>Masks</li>
              <li>Gloves</li>
            </div>
            <div>
              <li>Temperature Checks</li>
              <li>Sanitized Tools</li>
            </div>
          </ul>
        </div>
        <img src={`${basename}/assets/img/delivery-man-red-uniform-medical-mask-gloves-pointing-fingers-away-looking-confident 1.png`} alt="" />
      </div>
    </div>
  )
}

export default Home