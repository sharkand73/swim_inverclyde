import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

    return (
        <>
            <div className="main-section">
                <header>
                    <h1>CONTACT US</h1>
                </header>
                <p id="join-us">
                    Interested in joining us?  See the <Link to="/membership"className="link">membership section</Link> for details.
                </p>
                <br/>
                <h3>
                    EXECUTIVE COMMITTEE
                </h3>
                <table id='contact'>
                            <tbody>
                                <tr>
                                    <td>
                                        Tommy Sharkey
                                    </td>
                                    <td>
                                        <a href="mailto:tommy.sharkey16@talktalk.net">
                                        tommy.sharkey16@talktalk.net
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Marian Monk
                                    </td>
                                    <td>
                                        <a href="mailto:marianblair1@aol.com">
                                        marianblair1@aol.com
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Gerard Malone
                                    </td>
                                    <td>
                                        <a href="mailto:gjmalone@btinternet.com">
                                        gjmalone@btinternet.com
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Dorothy McMenemie
                                    </td>
                                    <td>
                                        <a href="mailto:dorothymcm@aol.com">
                                        dorothymcm@aol.com
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Morag Love
                                    </td>
                                    <td>
                                        <a href="mailto:moraglove@msn.com">
                                        moraglove@msn.com
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Donald Muirhead
                                    </td>
                                    <td>
                                        <a href="mailto:cumbrianduck@sky.com">
                                        cumbrianduck@sky.com
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
            </div>
        </>
    )
}

export default Contact;