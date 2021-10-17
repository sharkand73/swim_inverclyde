import React from 'react';

const Fees = ({data}) => {
    const tableRows = data.prices.map((row, index) => {
        let monthly, session;
        if (row.yearly) {
            monthly = Math.round(row.yearly * 100 / 12) / 100;
            session = Math.round(row.yearly * 100  / 52 / row.perWeek) / 100;       
        }
        else {
            session = row.session;
            monthly = null;
        }

        return (
            <tr className="fees-row" key={index}>
                <td>{row.number}</td>
                <td>{row.category}</td>
                <td>{row.payment}</td>
                <td>{row.yearly && `£${row.yearly}`}</td>
                <td>{row.discounted && `£${row.discounted}`}</td>
                <td>{monthly && `£${monthly}`}</td>
                <td>£{session}</td> 
            </tr>
        )
    })

    return (
        <>
            <div className="main-section">
                <header>
                    <h1>ANNUAL CLUB FEES</h1>
                </header>
                <table id="fees">
                    <thead>
                        <th>CATEGORY</th>
                        <th>DESCRIPTION</th>
                        <th>PAYMENT METHOD</th>
                        <th>YEARLY FEE</th>
                        <th>DISCOUNTED YEARLY FEE</th>
                        <th>MONTHLY D/D</th>
                        <th>COST PER SESSION</th>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Fees;