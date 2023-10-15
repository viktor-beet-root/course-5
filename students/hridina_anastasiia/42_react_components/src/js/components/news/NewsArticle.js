import React from "react";

export default function NewsArticle({ newsTitle, newsText }) {
    return (
        <div className="news__card">
            <h3 className="news__title">{newsTitle}</h3>
            <p className="news__text">{newsText}</p>
        </div>
    )
}
