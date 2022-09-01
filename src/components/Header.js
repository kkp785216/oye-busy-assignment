import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="main-header">
        <div className="main-header-wrapper">
            <div className="main-header__left">
                <Link to="/"><img src="/assets/img/logo.svg" className="logo" alt="LOGO"/></Link>
            </div>
            <div className="main-header__right">
                <nav className="navbar">
                    <ul>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/career">Career</Link></li>
                        <li><span>My Account</span></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header