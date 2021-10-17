import React from 'react';

const Policies = ({data}) => {

    return (
        <>
            <div className="main-section">
                <header>
                    <h1>POLICIES</h1>
                </header>
                <div className="two-column">
                    <div>
                        <h3>COMMITTEE</h3>
                        <table id="committee">
                            <tbody>
                                <tr>
                                    <td>
                                        President:
                                    </td>
                                    <td>
                                        {data.committee.president}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Vice-president:
                                    </td>
                                    <td>
                                        {data.committee.vicePresident}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Past President:
                                    </td>
                                    <td>
                                        {data.committee.pastPresident}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Secretary:
                                    </td>
                                    <td>
                                        {data.committee.secretary}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Treasurer:
                                    </td>
                                    <td>
                                        {data.committee.treasurer}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Press Officer:
                                    </td>
                                    <td>
                                        {data.committee.pressOfficer}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Coach:
                                    </td>
                                    <td>
                                        {data.committee.coach}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h3>DOCUMENTS</h3>

                        <p id="policies">
                        Relevant policies and documentation are available below for all to view.  If you require any further documentation please email us at: <a href="mailto:cumbrianduck@sky.com">cumbrianduck@sky.com</a>
                        </p>
                        <ul>
                            <li>
                                <a href={data.baseURL+data.documents.constitution}>
                                    Inverclyde Masters Constitution
                                </a>
                            </li>
                            <li>
                                <a href={data.baseURL+data.documents.privacy}>
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href={data.baseURL+data.documents.childProtection}>
                                    Child Protection Policy Statement
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                    
            </div>

        </>
    )
}

export default Policies;