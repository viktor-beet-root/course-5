import React from "react"

export default function BlogItem({ imgSrc, blogTitle, blogText}) {
    return (
        <div className="blog-list__items blog-item">
            <img className="blog-item__img"  src={ imgSrc } alt="blog-news-images" />
            <h3 className="blog-item__title">{ blogTitle }</h3>
            <p className="blog-item__text">{ blogText }</p>
        </div>
    )
}
