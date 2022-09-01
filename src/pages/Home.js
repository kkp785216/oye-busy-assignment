import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import config from '../lib/config'

const Home = () => {
  const { basename } = config;
  return (
    <div className="home">
      <div className='home__top1'>
        <div className="home__search__container" style={{ backgroundImage: `url('${basename}/assets/img/cosmetologist-cleaning-face-woman-beauty-salon (2) 1.jpg')` }}>
          <h3>Home services, on demand</h3>
          <form>
            <SearchOutlinedIcon />
            <input type="text" placeholder='Search for a service' />
          </form>
          <span>Examples: Salon, Women’s hair, Men’s grooming &amp; Many more..</span>
        </div>
        <div className="home__looking__container">

        </div>
      </div>
    </div>
  )
}

export default Home