import React from "react";

import SvgIcon from "../ui/SvgSprite";

export default function Weather({ cityClass, city, temp, imgId, imgAlt, classNameIcon }) {
    return (
        <div className={`weather__item  + ${cityClass}`}>
            <h3 className="weather__city">{city}</h3>
            <div className="weather-wrap">
                <p className="weather-wrap__temp">{temp}°C</p>
                <SvgIcon imgId={imgId} imgAlt={imgAlt} classNameIcon={classNameIcon} />
            </div>
        </div >
    )
}
