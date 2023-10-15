import React from "react";

export default function BlogArticle({ blogImg, title, text }) {
    return (
        <div className="article__item">
            <img className="article__img" src={blogImg} alt="article image" />
            <div className="article__info">
                <h3 className="article__name">{title}</h3>
                <p className="article__text">{text}</p>
            </div>
        </div>
    )
}
