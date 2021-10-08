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
                <li>
                    <Link className="link" to="/membership">
                        Membership
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/other">
                        Other Activities
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/about">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/policies">
                        Policies
                    </Link>
                </li>
                <li>
                    <Link className="link" to="/contact">
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;