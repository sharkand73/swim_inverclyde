import React from 'react';

import Cake from '../assets/cake.jpg';


const Results = ({data}) => {
    //const numberOfRows = data.meetYears;
    console.log(data.results["2019"].champs)
    const numberOfRows = 6;

    const row = (year) => {
        const parity=parseInt(year)%2?"odd":"even";
        return(
            <div className="row" key={parseInt(year)}>
                <a href={data.baseURL + data.results[year].results}>
                    <div className={parity}>
                        <div className="year">{year}</div>
                        <div>RESULTS</div>
                    </div>
                </a>
                <a href={data.baseURL + data.results[year].champs}>
                    <div className={parity}>
                        <div className="year">{year}</div>
                        <div>CHAMPS</div>
                    </div>
                </a>
                <a href={data.baseURL + data.results[year].individual}>
                    <div className={parity}>
                        <div className="year">{year}</div>
                        <div>INDIVIDUAL</div>
                        <div>RESULTS</div>
                    </div>
                </a>
                <a href={data.baseURL + data.results[year].ageAdjusted}>
                    <div className={parity}>
                        <div className="year">{year}</div>
                        <div>800M AGE</div>
                        <div>ADJUSTED</div>
                    </div>
                </a>
            </div>
        )
    }

    let rows=[];
    for(let year in data.results){
        rows.push(row(year))
    }

    rows.reverse();

    return (
        <>
            <header className="sub-header">
                <h1>RESULTS</h1>
            </header>
            <div className="cake">
                <img src = {Cake} alt="Cake" />
            </div>
            <div className="results">
                {rows}
            </div>
        </>
    )
}

export default Results;