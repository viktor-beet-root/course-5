import React, { createElement, useEffect, useState } from "react";

export default function Weather() {
    return (
        <div>
            <div className="weather__block clear-fix">
                <div className="weather__item lisabon">
                    <h3 className="weather__city">Lisabon</h3>
                    <div className="weather-wrap clear-fix">
                        <p className="weather-wrap__temp">21°C</p>
                        <img
                            className="weather-wrap__img"
                            src="images/wi-day-sunny.svg"
                            alt="Icon day sunny"
                        />
                    </div>
                </div>

                <div className="weather__item paris">
                    <h3 className="weather__city ">Paris</h3>
                    <div className="weather-wrap clear-fix">
                        <p className="weather-wrap__temp">11°C</p>
                        <img
                            className="weather-wrap__img"
                            src="images/wi-night-sleet.svg"
                            alt="Icon night sleet"
                        />
                    </div>
                </div>

                <div className="weather__item belgrade">
                    <h3 className="weather__city ">Belgrade</h3>
                    <div className="weather-wrap clear-fix">
                        <p className="weather-wrap__temp">15°C</p>
                        <img
                            className="weather-wrap__img"
                            src="images/wi-night-cloudy.svg"
                            alt="Icon night cloud"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};
