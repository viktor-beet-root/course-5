import React from "react";

import SvgIcon from "../ui/sprite/Svg-icon.js";

export default function Weather({ city, temp, iconId, colClass }) {
    return (
        <div className={`weather__item ${colClass}`}>
            <p className="weather__city">{city}</p>
            <div className="weather__wrapper">
                <p className="weather__temp">{temp} ºC</p>
                <SvgIcon iconId={iconId} className="weather__img" />
            </div>
        </div>
    )
}
