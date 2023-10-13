import React from "react";

export default function BlogArticle({ blogImg, title, text }) {

    return (
        <div className="article__item">
            <h3 className="article__name">{title}</h3>
            <img className="article__img" src={blogImg} alt="article image" />
            <p className="article__text">{text}</p>
        </div>
    )
}
