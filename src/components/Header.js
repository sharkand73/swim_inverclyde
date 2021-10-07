import React from 'react';
import Logo from '../assets/logo.jpg';

const Header = () => {

    return (
        <div id="top">
            <header>
                <img src={Logo} alt='Logo'/>
            </header>
        </div>
    )
}

export default Header;