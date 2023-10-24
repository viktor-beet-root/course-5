import React from "react";
import BlogArticle from "./Blog-article";

function BlogBlock() {
    return (
        <>
            <div className="blog">
                <h2 className="blog__title">Blog</h2>
                <div className="blog__block">

                    <BlogArticle imgName="isopro-100-whey-protein-isolate-18-kg.png"
                        imgAlt="Protein USN"
                        blogArtTitle="Купуйте протеїн USN!"
                        blogArtText="Купуйте протеїн USN IsoPro (1,8 kg) та гарантовано
                        отримуйте в
                        подарунок протеїн USN Whey+ Premium (2 kg). Акція діє доки не закінчаться
                        подарунки."
                    />

                    <BlogArticle imgName="smartshake-reforce-stainless-steel-grey-min.png"
                        imgAlt="SmartShake Reforce DC"
                        blogArtTitle="SmartShake Reforce DC"
                        blogArtText="Базовий металевий шейкер-пляшка великої ємності з
                        мінімум
                        функцій, але з незмінною якістю для шанувальників Всесвіту DC. Це
                        оригінальний
                        виріб із нержавіючої сталі – те, що вам потрібно!"
                    />

                    <BlogArticle imgName="21457-smartshake-pill-box-min.png"
                        imgAlt="Smartshake Pill Box Organiser 2-Pack"
                        blogArtTitle="Smartshake Pill Box Organiser 2-Pack"
                        blogArtText="Бути розумним. Бути організованим. Залишіть свої
                        брудні
                        пігулки у минулому. З цією парою органайзерів для таблеток - Snartshake Pill
                        Box
                        Organiser 2-Pack , розділених на 7 днів + 5 додаткових місць зберігання, у
                        вас
                        буде повний контроль."
                    />

                    <BlogArticle imgName="05-reforce-harry-potter-houses-lifestyle-min.png"
                        imgAlt="Smartshake News"
                        blogArtTitle="Надходження Smartshake!"
                        blogArtText="В наявності: повна колекція шейкерів Harry Potter,
                    таблетниці Superman, Supergirl, Batman і Smartshake, лійки Superman,
                    Supergirl,
                    Batman і Wonderwoman, а також багато інших шейкерів, пляшок та контейнерів."
                    />

                </div>
            </div>
        </>
    );
}

export default BlogBlock;
