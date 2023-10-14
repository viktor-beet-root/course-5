import React from "react";
import Weather from "./Weather.js";

const city = [{}];

export default function WeatherList() {
    return (
        <div className="row weather__row">
            <Weather colClass="col-6" city="Lisabon" temp={22} iconId="lisbon" />
            <Weather colClass="col-3" city="Paris" temp={11} iconId="paris" />
            <Weather colClass="col-3" city="Belgrade" temp={21} iconId="belgrade" />
            <Weather colClass="col-6" city="Venice" temp={22} iconId="venice" />
            <Weather colClass="col-6" city="Lisabon" temp={22} iconId="venice" />
            <Weather colClass="col-6" city="Lisabon" temp={22} iconId="venice" />
            <Weather colClass="col-6" city="Lisabon" temp={22} iconId="venice" />
            <Weather colClass="col-6" city="Lisabon" temp={22} iconId="venice" />
            <Weather colClass="col-6" city="Lisabon" temp={22} iconId="venice" />
        </div>
    )
}
