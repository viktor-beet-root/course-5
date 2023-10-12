import React from "react";

import NewsTitle from "./News-title.js";
import NewsList from "./News-list.js";

export default function NewsWrapper() {
    return (
        <div className="news-wrapper">
            <NewsTitle newsMainTitle='News'/>
            <NewsList />         
        </div>
    )
}
