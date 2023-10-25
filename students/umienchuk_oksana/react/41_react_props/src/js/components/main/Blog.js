import React from "react";

import BlogBlock from "./blog-block/Blog-block";
import NewsBlock from "./news-block/News-block";

function Blog({ classNameBlog, classNameNews }) {
    return (
        <>
            <section className="main-wrap">
                <div className="container">
                    <div className="row">
                        <div className={classNameBlog}>
                            <BlogBlock />
                        </div>

                        <div className={classNameNews}>
                            <NewsBlock />
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Blog;
