import React from "react";

function Baner({ imgPath, altImg }) {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <img src={imgPath} alt={altImg} />
                </div>
            </section>
        </>
    );
}

export default Baner;
