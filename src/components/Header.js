import React from 'react';
import Logo from '../assets/logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
            <header>
                <Link className="link" to="/">
                    <img src={Logo} alt='Logo'/>
                </Link>
                <a className="twitter" href="https://twitter.com/SwimInverclyde">
                    <div id="twitter-img">
                        {/* <img src={TwitterGrey} alt="Twitter" id="twitter-img" /> */}
                    </div>
                </a>
                <a className="FB" href="https://www.facebook.com/InverclydeMastersSwimmingClub">
                    <div id="FB-img">
                        {/* <img src={FbGrey} alt="Twitter" id="FB-img"/> */}
                    </div>
                </a>
            </header>
    )
}

export default Header;