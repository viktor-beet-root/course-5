import React from "react";

import Weather from "./Weather";

export default function WeatherList() {
    return (
        <div className="weather__block">
            < Weather city="Lisabon" cityClass="lisabon" temp="21" imgId="wi-day-sunny" imgAlt="day sunny" classNameIcon="weather-wrap__img" />
            < Weather city="Paris" cityClass="paris" temp="11" imgId="wi-night-sleet" imgAlt="night sleet" classNameIcon="weather-wrap__img" />
            < Weather city="Belgrade" cityClass="belgrade" temp="15" imgId="wi-night-cloudy" imgAlt="night cloud" classNameIcon="weather-wrap__img" />
            < Weather city="Venice" cityClass="venice" temp="15" imgId="wi-day-cloudy-high" imgAlt="day cloudy high" classNameIcon="weather-wrap__img" />
            < Weather city="Tel-Avive" cityClass="tel-avive" temp="32" imgId="wi-day-sunny" imgAlt="day sunny" classNameIcon="weather-wrap__img" />
            < Weather city="Cair" cityClass="cair" temp="21" imgId="wi-day-sunny" imgAlt="day sunny" classNameIcon="weather-wrap__img" />
            < Weather city="New-York" cityClass="new-york" temp="17" imgId="wi-day-thunderstorm" imgAlt="thunderstorm" classNameIcon="weather-wrap__img" />
            < Weather city="New-Delhi" cityClass="new-delhi" temp="17" imgId="wi-rain-wind" imgAlt="rain wind" classNameIcon="weather-wrap__img" />
            < Weather city="San-Francisco" cityClass="san-francisco" temp="15" imgId="wi-day-cloudy-high" imgAlt="day cloudy" classNameIcon="weather-wrap__img" />
            < Weather city="Tokyo" cityClass="tokyo" temp="8" imgId="wi-night-clear" imgAlt="night clear" classNameIcon="weather-wrap__img" />
            < Weather city="Sydney" cityClass="sydney" temp="21" imgId="wi-day-sunny" imgAlt="day sunny" classNameIcon="weather-wrap__img" />
        </div>
    )
}
