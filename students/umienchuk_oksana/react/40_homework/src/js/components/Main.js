import React from "react";

import WeatherList from "./weather/Wether-list";
import SvgIcon from "./ui/SvgSprite";


export default function Main() {
    return (
        <main className="weather row">
            <div className="container">
                <div className="weather__title-wrap">
                    <h2 className="weather__title">CSS Weather Forecast</h2>
                    <SvgIcon imgId="wi-sunset" altImg="sunset" classNameIcon="weather-wrap__img" />
                </div>
                < WeatherList />
                <p className="last-massege">Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
            </div>
        </main >
    )
}
