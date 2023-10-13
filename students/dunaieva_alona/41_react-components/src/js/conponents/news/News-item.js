import React from "react";

export default function NewsItem({ titleNews, textNews }) {
    return (
        <div className="news-list__items list-item">
            <h3 className="list-item__title">{ titleNews }</h3>
            <p className="list-item__text">{ textNews }</p>
         </div>
    )
}
