import React from "react";

export default function Main() {

    return (
        <main>
            <section className="banner">
                <div className="container">
                    Full-width banner image
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className="blog">
                            <h2 className="blog__title">Blog</h2>
                            <div className="blog__item"></div>
                            <div className="blog__item"></div>
                            <div className="blog__item"></div>
                            <div className="blog__item"></div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="news">
                            <h2 className="news__title">News</h2>
                            <div className="news__item"></div>
                            <div className="news__item"></div>
                            <div className="news__item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
