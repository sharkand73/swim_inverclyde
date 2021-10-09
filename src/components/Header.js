import React from 'react';
import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
            <header id="main-header">
                <Link className="link" to="/">
                    <img src={Logo} alt="Logo" id ="logo"/>
                </Link>
                <a className="twitter" href="https://twitter.com/SwimInverclyde">
                    <div id="twitter-img">
                        {/* Hover trick using background image */}
                    </div>
                </a>
                <a className="FB" href="https://www.facebook.com/InverclydeMastersSwimmingClub">
                    <div id="FB-img">
                        {/* Hover trick using background image */}
                    </div>
                </a>
            </header>
    )
}

export default Header;