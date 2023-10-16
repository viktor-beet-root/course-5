import React from "react";
import BlogTitle from "./BlogTitle";
import BlogList from "./BlogList";



export default function BlogWrapper() {
    return (
        <div className="blog-article__wrapper">
            <BlogTitle />
            <BlogList />
        </div>
    )
}
