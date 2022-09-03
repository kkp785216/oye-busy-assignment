import React from 'react'
import config from '../lib/config'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Heading1 from '../components/Heading1';
import ServiceCard from '../components/ServiceCard';
import PremiumService from '../components/PremiumService';
import { Link } from 'react-router-dom';
import Refer from '../components/Refer';

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
      <div className="professional__service">
        <Heading1>
          <h2>Professional Cleaning Services</h2>
          <span>Premium Home Services</span>
        </Heading1>
        <ServiceCard />
      </div>
      <div className="mostused__service">
        <Heading1>
          <h2>Most Used Services</h2>
          <span>Premium Home Services</span>
        </Heading1>
        <ServiceCard />
      </div>
      <div className="assuredmind">
        <h2>Assured Peace of Mind</h2>
        <div className="assuredmind__row">
          <div className="assuredmind__col">
            <img src={`${basename}/assets/img/gradient-graphic-2 2.svg`} alt="" />
            <div>
              <strong>High Quality Work</strong>
              <span>Only authorized service experts and genuine spare parts and equipments</span>
            </div>
          </div>
          <div className="assuredmind__col">
            <img src={`${basename}/assets/img/gradient-graphic-2 1.svg`} alt="" />
            <div>
              <strong>Hassle Free</strong>
              <span>Sit back and relax. We do all the work</span>
            </div>
          </div>
          <div className="assuredmind__col">
            <img src={`${basename}/assets/img/gradient-graphic-3 1.svg`} alt="" />
            <div>
              <strong>Totally Cashless</strong>
              <span>Pay online for Safe &amp; Secure payment. Many benefits and offers available with online payment</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mostused__service2">
        <Heading1>
          <h2>Trending Services</h2>
          <span>Premium Home Services</span>
        </Heading1>
        <ServiceCard />
      </div>
      <div className="home__appliances">
        <Heading1>
          <h2>Home Appliances Services</h2>
          <span>Premium Home Services</span>
        </Heading1>
        <div className="home__appliances__products">
          <div className="home__appliances__products__col">
            <img src={`${basename}/assets/img/appliances/Rectangle 1918.png`} alt="" />
            <span>Washing Machine Repair</span>
          </div>
          <div className="home__appliances__products__col">
            <img src={`${basename}/assets/img/appliances/Rectangle 1917.png`} alt="" />
            <span>Refrigerator Repair / Service</span>
          </div>
          <div className="home__appliances__products__col">
            <img src={`${basename}/assets/img/appliances/Rectangle 1916.png`} alt="" />
            <span>Microwave Repair</span>
          </div>
          <div className="home__appliances__products__col">
            <img src={`${basename}/assets/img/appliances/Rectangle 1919.png`} alt="" />
            <span>RO Service</span>
          </div>
          <div className="home__appliances__products__col">
            <img src={`${basename}/assets/img/appliances/Rectangle 1922.png`} alt="" />
            <span>LED TV Repair</span>
          </div>
          <div className="home__appliances__products__col">
            <img src={`${basename}/assets/img/appliances/Group 1535.png`} alt="" />
            <span>AC Services</span>
          </div>
        </div>
      </div>
      <div className="book__service__ad">
        <img src={`${basename}/assets/img/Group 1653.jpg`} width="100%" alt="" />
      </div>
      <div className="electrician__services">
        <PremiumService heading={<>Electrician<br />Services</>}>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/electrician/mcb___fuse.png`} alt="" />
              <strong>MCB &amp; Fuse</strong>
              <span>Repairing &amp; Installation</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/electrician/switches___sockets.png`} alt="" />
              <strong>Switch &amp; Socket</strong>
              <span>Shower, Faucets &amp; Holder Installation &amp; Repair</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/electrician/wiring.png`} alt="" />
              <strong>Wiring</strong>
              <span>Toilet pot, Sink, Bathroom, Balcony pipe</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/electrician/appliance.png`} alt="" />
              <strong>Appliances</strong>
              <span>Painting, Clock &amp; Photoframe</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/electrician/chandelier.png`} alt="" />
              <strong>Chandelier</strong>
              <span>Holder, Hanger, Rod Installation</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/electrician/door_bell.png`} alt="" />
              <strong>Door Bell</strong>
              <span>Bed, Table, Rack &amp; Cabinet</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/electrician/Drill_&_hang.png`} alt="" />
              <strong>Drill &amp; Hole</strong>
              <span>Drill &amp; Hole Table, Chair cap &amp; wheel, Wooden Floor</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/electrician/fan.png`} alt="" />
              <strong>Fan</strong>
              <span>Drawer, Cupboard &amp; Door lock Repair &amp; Installation</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/electrician/inverter___stabilizer.png`} alt="" />
              <strong>Inverter &amp; Stablizer</strong>
              <span>Drawer, Cupboard &amp; Door lock Repair &amp; Installation</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/electrician/lights.png`} alt="" />
              <strong>Light</strong>
              <span>Drawer, Cupboard &amp; Door lock Repair &amp; Installation</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/electrician/room_heater.png`} alt="" />
              <strong>Heater</strong>
              <span>Drawer, Cupboard &amp; Door lock Repair &amp; Installation</span>
            </div>
          </SwiperSlide>
        </PremiumService>
      </div>
      <div className="plumber__services">
        <PremiumService heading={<>Plumber<br />Services</>}>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/plumber/Basin_&_sink.png`} alt="" />
              <strong>Wash Basin &amp; Sink</strong>
              <span>Repairing &amp; Installation</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/plumber/Bath_fittings.png`} alt="" />
              <strong>Bath Fittings</strong>
              <span>Shower, Faucets &amp; Holder Installation &amp; Repair</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/plumber/Blockage.png`} alt="" />
              <strong>Blockage</strong>
              <span>Toilet pot, Sink, Bathroom, Balcony pipe</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/plumber/Drill_&_hang.png`} alt="" />
              <strong>Drill &amp; Hole</strong>
              <span>Painting, Clock &amp; Photoframe</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/plumber/Minor_installations.png`} alt="" />
              <strong>Minor Installations</strong>
              <span>Holder, Hanger, Rod Installation</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/plumber/Tap.png`} alt="" />
              <strong>Mixer, Tap &amp; Nozzle</strong>
              <span>Bed, Table, Rack &amp; Cabinet</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/plumber/Toilet.png`} alt="" />
              <strong>Toilet</strong>
              <span>Table, Chair cap &amp; wheel, Wooden Floor</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/plumber/Water_tank.png`} alt="" />
              <strong>Water Tank</strong>
              <span>Drawer, Cupboard &amp; Door lock Repair &amp; Installation</span>
            </div>
          </SwiperSlide>
        </PremiumService>
      </div>
      <div className="carpenter__services">
        <PremiumService heading={<>Carpenter<br />Services</>}>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/carpenter/Bed.png`} alt="" />
              <strong>Bed</strong>
              <span>Repairing Support, Legs</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/carpenter/Curtain &amp; Blinds.png`} alt="" />
              <strong>Curtain &amp; Blinds</strong>
              <span>Motorized, Non-Motorized Blinds &amp; Curtain Rod</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/carpenter/door 1.png`} alt="" />
              <strong>Door</strong>
              <span>Repairing, Accessories Installation</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/carpenter/Drawer_&_cupboard.png`} alt="" />
              <strong>Drawer &amp; Cupboard</strong>
              <span>Channel, Hinge Repair</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/carpenter/Fitting_&_minor_installations.png`} alt="" />
              <strong>Fittings &amp; Installations</strong>
              <span>Holder, Hanger, Rod Installation</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/carpenter/Furniture_assembly.png`} alt="" />
              <strong>Furniture Assembly</strong>
              <span>Bed, Table, Rack &amp; Cabinet</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/carpenter/Furniture_repairing.png`} width="106px" height="91px" alt="" />
              <strong>Furniture Repair</strong>
              <span>Table, Chair cap &amp; wheel, Wooden Floor</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/carpenter/Lock.png`} alt="" />
              <strong>Lock</strong>
              <span>Drawer, Cupboard &amp; Door lock Repair &amp; Installation</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="premium__service__products__col">
              <img src={`${basename}/assets/img/carpenter/Drill_&_hang.png`} alt="" />
              <strong>Drill &amp; Hole</strong>
              <span>Painting, Clock &amp; Photoframe</span>
            </div>
          </SwiperSlide>
        </PremiumService>
      </div>
      <div className='why__choose'>
        <img src={`${basename}/assets/img/indecating.png`} alt="" />
        <div className="why__choose__row">
          <div className="why__choose__col">
            <h2>Why People Choose Us</h2>
            <li>Affordable Rates</li>
            <li>On Time Service</li>
            <li>Verified Professionals</li>
            <li>Excellent Service</li>
          </div>
        </div>
      </div>
      <div className="customers__says">
        <h2>What our customer say</h2>
        <div className="customers__says__row">
          {[...new Array(4)].map((e, i) => (
            <div className='customers__says__col__wrapper'>
              <div className="customers__says__col" key={i}>
                <img src={`${basename}/assets/img/Frame.svg`} alt="" />
                <p>Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. </p>
                <Link className='hover' to="/client/ritu-kumar">Ritu Kumar</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Refer/>
      <div className="hssle__service">
        <img src={`${basename}/assets/img/stamp-02 1.png`} alt="" />
        <span>Hassle free services with OyeBusy</span>
      </div>
    </div>
  )
}

export default Home