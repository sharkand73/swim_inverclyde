import React from 'react';
import { Link } from 'react-router-dom';

import Results from '../assets/results-home.jpg';
import Gala from '../assets/gala.jpg';
import EntryForm from '../assets/entryform.jpg';

const SwimMeet = ({data}) => {

    return (
        <>
            <header className="sub-header">
                <h1>SWIM MEET</h1>
            </header>

            <ul className="meet-menu">
                <li>
                    <div>
                        <Link to="/results" className="link">
                            <img src={Results} alt="Results" />
                            <p>
                                RESULTS
                            </p>
                        </Link>
                    </div>
                    <p>
                    View the results from Inverclyde Masters Annual Galas. 2019 Meet Results Inverclyde Masters Meet Records Annual Trophy Winners Record Payments 2019 Inverclyde Masters Relay Records 2019 Club Championship Table 2019...
                    </p>
                </li>
                <li>
                    <div>
                        <Link to="/swim-meet-info" className="link">
                            <img src={Gala} alt="Swim Meet" /> 
                            <p>
                                SWIM MEET
                            </p>  
                        </Link> 
                    </div>
                    <p>
                    Due to Coronavirus the 2020 Swim Meet is cancelled – information on 2021 to be advised at a later date...
                    </p>
                </li>
                <li>
                    <div>
                        <a href="https://www.im-swim.co.uk/" className="link">
                            <img src={EntryForm} alt="Entry Form" />
                            <p>
                                ENTER NOW
                            </p>
                        </a>
                    </div>
                    <p>
                    Due to Coronavirus the 2020 Swim Meet is cancelled – information on 2021 to be advised at a later date...
                    </p>
                </li>
            </ul>
        </>
    )
}

export default SwimMeet;