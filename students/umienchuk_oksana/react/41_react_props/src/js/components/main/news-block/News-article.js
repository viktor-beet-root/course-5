import React from "react";

function NewsArticle({ imgNameNews, newsArtTitle, newsImgAlt, hrefNewsLinkPage }) {
    return (<>
        <article className="news-art news-container">
            <img className="news-art__image" src={"./images/" + imgNameNews} alt={newsImgAlt} />
            <div className="news-art__container">
                <h3 className="news-art__title">{newsArtTitle}</h3>
                <a href={hrefNewsLinkPage} className="read-more-button">Читати далі...</a>
            </div>
        </article>
    </>);
}

export default NewsArticle;
