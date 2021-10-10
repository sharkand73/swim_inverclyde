import React from 'react';

const News = () => {

    return (
        <>
            <div id="blog">
                <header id="section-header">
                    <h1>
                        BLOG
                    </h1>
                </header>
                
                <section className="blog-item">
                    <h2 className="title">
                        GOUROCK POOL CLOSURE
                    </h2>
                    <h4 className="date">
                        Monday 13th September 2021
                    </h4>
                </section>

                <section className="blog-item">
                    <h2 className="title">
                        TOMMY IS A JOBBY
                    </h2>
                    <h4 className="date">
                        Sunday 7th February 2021
                    </h4>
                </section>

                <section className="blog-item">
                    <h2 className="title">
                        SWIM MEET CANCELLED
                    </h2>
                    <h4 className="date">
                        Friday 19th June 2020
                    </h4>
                </section>
            </div>
        </>
    )
}

export default News;