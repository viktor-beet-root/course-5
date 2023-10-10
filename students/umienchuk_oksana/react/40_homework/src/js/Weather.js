import React, { createElement, useEffect, useState } from "react";

export default function Weather() {
    return (
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
    )
};
