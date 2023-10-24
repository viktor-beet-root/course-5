import React from "react";

function BlogArticle({ imgName, blogArtTitle, blogArtText, imgAlt }) {
    return (
        <>
            <article className="blog-art article-container">
                <img className="blog-art__image"
                    src={"./images/" + imgName} alt={imgAlt} />
                <div className="blog-art__wrap">
                    <h3 className="blog-art__title">{blogArtTitle}</h3>
                    <p className="blog-art__text">{blogArtText}</p>
                    <a href="#" className="read-more-button">Читати далі...</a>
                </div>
            </article>
        </>
    );
}

export default BlogArticle;
