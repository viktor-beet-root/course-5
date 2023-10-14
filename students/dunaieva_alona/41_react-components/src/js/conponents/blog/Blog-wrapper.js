import React from "react";

import BlogTitle from "./Blog-title.js";
import BlogList from "./Blog-list.js";

export default function BlogWrapper() {
    return ( 
        <div className="blog-wrapper">
            <BlogTitle blogMainTitle='Blog' />
            <BlogList />
        </div>
        
    )
}
