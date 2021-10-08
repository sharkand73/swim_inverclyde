import React from 'react';
import Logo from '../assets/logo.jpg';
import FbGrey from '../assets/FB_grey.png';
import FbBlack from '../assets/FB_black.png';
import TwitterGrey from '../assets/twitter_grey.png';
import TwitterBlack from '../assets/twitter_black.png';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div id="top">
            <header>
                <Link className="link" to="/">
                    <img src={Logo} alt='Logo'/>
                </Link>
                <a className="twitter" href="https://twitter.com/SwimInverclyde">
                    <img src={TwitterGrey} alt="Twitter" id="twitter-img" /> 
                </a>
                <a className="FB" href="https://www.facebook.com/InverclydeMastersSwimmingClub">
                    <img src={FbGrey} alt="Twitter" id="FB-img"/>
                </a>
            </header>
        </div>
    )
}

export default Header;