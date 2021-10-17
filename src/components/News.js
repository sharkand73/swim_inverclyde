import React, { useState } from 'react';
import moment from 'moment';

const News = ({blog}) => {

    const [currentBlog, setCurrentBlog] = useState(null);

    const blogItems = blog.map((item, index) => {
        let formattedDate = moment(new Date(item.date)).format("dddd Do MMMM YYYY");
        return (
            <section className="blog-item" key={index} onClick = {() => setCurrentBlog(blog[index])}>
                    <h2 className="title">
                        {item.title}
                    </h2>
                    <h4 className="date">
                        {formattedDate}
                    </h4>
                </section>
        )
    });

    if (currentBlog) {
        
        return (
            <>
            <div id="blog">
                <header id="section-header">
                    <h1>
                        BLOG
                    </h1>
                </header>
                <section className="blog-item" onClick = {()=>setCurrentBlog(null)}>
                    <h2 className="title">
                        {currentBlog.title}
                    </h2>
                    <p className="body">
                        {currentBlog.body}
                    </p>
                    <h4 className="date">
                        {moment(new Date(currentBlog.date)).format("dddd Do MMMM YYYY")}
                    </h4>
                </section>
            </div>
        </>
        )
    }
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