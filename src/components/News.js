import React from 'react';

const News = ({blog}) => {

    const blogItems = blog.map((item, index) => {
        return (
            <section className="blog-item" key={index}>
                    <h2 className="title">
                        {item.title}
                    </h2>
                    <h4 className="date">
                        {item.date}
                    </h4>
                </section>
        )
    });

    return (
        <>
            <div id="blog">
                <header id="section-header">
                    <h1>
                        BLOG
                    </h1>
                </header>
                {blogItems}
            </div>
        </>
    )
}

export default News;