import React from 'react';

const Membership = ({data}) => {

    return (
        <>
            <div className="main-section">
                <header>
                    <h1>MEMBERSHIP</h1>
                </header>
                <ul>
                    <li>
                        Annual Club Fees
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