import React from "react";

import NewsArticle from "./News-article";

function NewsBlock() {
    return (
        <div className="news">
            <h2 className="news__title">News</h2>

            <div className="news__block">

                <NewsArticle
                    imgNameNews="usn-free-protein.jpg"
                    newsArtTitle="Даруємо протеїн USN!"
                    newsImgAlt="IsoPro 100 Whey Protein Isolate"
                    hrefNewsLinkPage="#"
                />

                <NewsArticle
                    imgNameNews="bioglan-haliborange-sambucol-collagen.jpg"
                    newsArtTitle="Акція на бренди Bioglan, Haliborange та Sambucol"
                    newsImgAlt="Bioglan, Haliborange, Sambucol"
                    hrefNewsLinkPage="#"
                />

                <NewsArticle
                    imgNameNews="summer-sale-2023.jpg"
                    newsArtTitle="Акція на бренд ALL NUTRITION!"
                    newsImgAlt="Promotion on the ALL NUTRITION!"
                    hrefNewsLinkPage="#"
                />

            </div>
        </div>
    );
}

export default NewsBlock;
