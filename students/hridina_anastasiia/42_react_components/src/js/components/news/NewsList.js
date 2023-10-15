import React from "react";

import NewsArticle from "./NewsArticle";

export default function NewsList() {
    return (
        <div className="news__list">
            <NewsArticle newsTitle='Should we be worried about AI`s growing energy use?' newsText='The expanding use of large AI models demands huge numbers of powerful servers,
             which could end up consuming as much energy as whole countries' />
            <NewsArticle newsTitle='Bing Chat AI tricked into solving CAPTCHA tests with simple lies' newsText='Microsoft` s AI-powered Bing Chat can be tricked into 
            solving anti-bot tests with stories about deceased grandmothers or missing glasses' />
            <NewsArticle newsTitle='Let`s stop making lab-grown meat weird' newsText='The lab-grown meat industry needs to perfect and normalise the staples, 
            like chicken and beef, before jumping to exotic alternatives like mammoth, argues Brian Kateman' />
            <NewsArticle newsTitle='Two giant planets collided and vaporised in a distant star system' newsText='A star behaving strangely was the first clue that astronomers were witnessing two Neptune-sized planets smashing into each other, 
            creating a doughnut that may one day birth a new planet and moons' />
            <NewsArticle newsTitle='The entire brain may be involved in language, not just a few regions' newsText='Brain regions identified as “language centres” are actually hubs that coordinate 
            the processing of language throughout the brain, argues a controversial new study' />
        </div>
    )
}
