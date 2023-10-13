import React from "react";

import BlogWrapper from "./blog/BlogWrapper";
import NewsWrapper from "./news/NewsWrapper";


function BlogPage() {
    return (
        <div className="article__container">
            <BlogWrapper />
            <aside className="aside__block">
                <NewsWrapper />
            </aside>
        </div>
    );
}


export default BlogPage;
