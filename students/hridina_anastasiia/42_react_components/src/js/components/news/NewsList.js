import React from "react";

import NewsArticle from "./NewsArticle";

export default function NewsList() {
    return (
        <div className="news__list">
            <NewsArticle newsImg='./images/newsimg01.jpg' newsTitle='Should we be worried about AI`s growing energy use?' />
            <NewsArticle newsImg='./images/newsimg02.jpg' newsTitle='Bing Chat AI tricked into solving CAPTCHA tests with simple lies' />
            <NewsArticle newsImg='./images/newsimg03.jpg' newsTitle='Let`s stop making lab-grown meat weird' />
        </div>
    )
}
