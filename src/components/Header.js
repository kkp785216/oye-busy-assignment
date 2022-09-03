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
                    <Link to="/"><img src={`${basename}/assets/img/logo.svg`} className="logo" alt="LOGO" /></Link>
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
                                <span>My Account</span><KeyboardArrowDownOutlinedIcon fontSize='small' />
                                <div className="navbar__account__float">
                                    <Link className='hover' to="/profile">Profile</Link>
                                    <Link className='hover' to="/profile">Orders</Link>
                                    <Link className='hover' to="/profile">Cart</Link>
                                    <Link className='hover' to="/profile">Logout</Link>
                                </div>
                            </li>
                            <li><Link to="/career"><ShoppingCartIcon className='navbar__shopicon' /></Link></li>
                            <li><Link className='navbar__download' to="/career"><img src={`${basename}/assets/img/playstore 1.svg`} width='20' alt="" />Download App</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header