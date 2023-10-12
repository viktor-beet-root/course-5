import React from "react";

import BlogWrapper from "./blog/Blog-wrapper.js";
import NewsWrapper from "./news/News-wrapper.js";

function Blog() {
    return (
        <div className="container blog__container">
            <BlogWrapper />
            <aside className="news">
                <NewsWrapper />
            </aside>
        </div>

    );
}


export default Blog;
