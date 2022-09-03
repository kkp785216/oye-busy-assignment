import React from 'react'
import config from '../lib/config'

const Refer = () => {
    const { basename } = config;
    return (
        <div className="refer">
            <div className="refer__left">
                <h3>Refer and or get link</h3>
                <label htmlFor='refer'>Invite your friends</label>
                <div className="refer__input">
                    <input id='refer' type="text" placeholder='Enter your 10 digit mobile number' />
                    <img src={`${basename}/assets/img/arrow-right.png`} alt="" />
                </div>
                <div className="refer__platform__icons">
                    <img src={`${basename}/assets/img/google-play-badge 2.png`} alt="" />
                    <img src={`${basename}/assets/img/apple-store.png`} alt="" />
                </div>
            </div>
            <div className="refer__right">
                <img src={`${basename}/assets/img/app_phon 1.png`} className='refer__screenshot1' alt="" />
                <img src={`${basename}/assets/img/app_phon 2.png`} className='refer__screenshot2' alt="" />
            </div>
        </div>
    )
}

export default Refer