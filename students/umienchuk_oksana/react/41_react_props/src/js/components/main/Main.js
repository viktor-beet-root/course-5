import React from "react";

import Baner from "./Baner";
import Blog from "./Blog";

function Main() {
    return (
        <>
            <main>
                <Baner imgPath="./images/usn-free-protein-d.webp" altImg="USN Protein" />
                <Blog classNameBlog="col-8" classNameNews="col-4" />
            </main>
        </>
    );
}

export default Main;
