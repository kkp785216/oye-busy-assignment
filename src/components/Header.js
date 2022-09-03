import React from 'react'
import { Link } from 'react-router-dom'
import config from '../lib/config'
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Header = () => {
    const { basename } = config;
    return (
        <header className="main-header">
            <div className="main-header-wrapper">
                <div className="main-header__left">
                    <Link to="/" className="logo"><img src={`${basename}/assets/img/logo.svg`} alt="LOGO" /></Link>
                    <div className="header__left__location">
                        <FmdGoodOutlinedIcon />
                        <span>1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301</span>
                        <KeyboardArrowDownOutlinedIcon fontSize='small' />
                    </div>
                </div>
                <div className="main-header__right">
                    <nav className="navbar">
                        <ul>
                            <li><Link className='hover' to="/blog">Blog</Link></li>
                            <li><Link className='hover' to="/career">Career</Link></li>
                            <li className='navbar__account'>
                                <span className='navbar__my__account'>My Account<KeyboardArrowDownOutlinedIcon fontSize='small' /></span>
                                <img className='navbar__profile__img' src={`${basename}/assets/img/me.jpg`} alt="" />
                                <div className="navbar__account__float">
                                    <Link className='hover' to="/profile">Profile</Link>
                                    <Link className='hover' to="/profile">Orders</Link>
                                    <Link className='hover' to="/profile">Cart</Link>
                                    <Link className='hover' to="/profile">Logout</Link>
                                </div>
                            </li>
                            <li className='navbar__shopicon_li'><Link to="/career"><ShoppingCartIcon className='navbar__shopicon' /></Link></li>
                            <li className='navbar__download__li'><Link className='navbar__download' to="/career"><img src={`${basename}/assets/img/playstore 1.svg`} width='20' alt="" />Download App</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header