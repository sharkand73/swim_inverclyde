import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div id="nav-wrapper">
            <ul>
                <li>
                    <Link className="link" to="/swim-meet">
                        Swim Meet
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/news">
                        News & Events
                    </Link>
                </li>
                <li>Membership</li>
                <li>Other Activities</li>
                <li>About Us</li>
                <li>Policies</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default NavBar;