import React from 'react'
import config from '../lib/config'

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
          <div className="home__looking__heading">
            <h3>What are you looking for?</h3>
            <span>FLAT $400 OFF</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home