import React from "react";

import BlogWrapper from "./blog/BlogWrapper";
import NewsWrapper from "./news/NewsWrapper";


function BlogPage() {
    return (
        <div className="article__container">
            <BlogWrapper />
            <NewsWrapper />
        </div>
    );
}


export default BlogPage;
