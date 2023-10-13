import React from "react";

export default function NewsArticle({ newsImg, newsTitle }) {
    return (
        <div className="news__card">
            <img className="news__img" scr={newsImg} alt="news article image" />
            <h3 className="news__title">{newsTitle}</h3>
        </div>
    )
}
