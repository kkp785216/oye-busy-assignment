import React from 'react'

const Header = () => {
  return (
    <header className="main-header">
        <div className="main-header-wrapper">
            <div className="main-header__left">
                <img src="/assets/img/logo.svg" className="logo" alt="LOGO"/>
            </div>
            <div className="main-header__right">
                <nav className="navbar">
                    <ul>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a>My Account</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header