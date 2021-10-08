import React from 'react';
import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div id="top">
            <header>
                <Link className="link" to="/">
                    <img src={Logo} alt='Logo'/>
                </Link>
            </header>
        </div>
    )
}

export default Header;