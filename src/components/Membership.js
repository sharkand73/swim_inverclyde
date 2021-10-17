import React from 'react';
import { Link } from 'react-router-dom';

const Membership = ({data}) => {

    return (
        <>
            <div className="main-section">
                <header>
                    <h1>MEMBERSHIP</h1>
                </header>
                <ul>
                    <li>
                        <Link to='/fees'>
                            Annual Club Fees
                        </Link>
                    </li>
                    <li>
                        <a href={data.baseURL+data.documents.membershipForm}>
                            Membership Application Form
                        </a>
                    </li>
                    <li>
                        <a href={data.baseURL+data.documents.mandateForm}>
                            Mandate Form
                        </a>
                    </li>
                    <li>
                        <a href={data.baseURL+data.documents.clubStructure}>
                            Club Structure
                        </a>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Membership;