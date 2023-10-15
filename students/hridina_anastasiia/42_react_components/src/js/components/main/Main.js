import React from "react";

import BlogPage from "../BlogPage";
import Banner from "../blog/Banner";


export default function Main() {
    return (
        <main className="main">
            <section className="banner">
                <Banner />
            </section>
            <section className="blog__article">
                <BlogPage />
            </section>
        </main>
    )
}
