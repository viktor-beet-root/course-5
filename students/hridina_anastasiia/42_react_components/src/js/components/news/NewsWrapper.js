import React from "react";
import NewsTitle from "./NewsTitle";
import NewsList from "./NewsList";

export default function NewsWrapper() {
    return (
        <div className="news__wrapper">
            <NewsTitle />
            <NewsList />
        </div>
    )
}
