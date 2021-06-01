import React from 'react'

const Header = () => {
    return (
        <div className='header d-flex'>
            <div className='header-logo'>
                {/* <img src='images/logo.png' /> */}
                <h1>Weather Works</h1>
            </div>
            <div className='header-theme'><img alt='moon' src='images/moon.png' /></div>
        </div>
    )
}

export default Header
