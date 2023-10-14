import React, { createElement, useEffect, useState } from "react";

export default function Weather() {
    return (
        <>
            <main className="weather">
                <div className="container">
                    <div className="weather__title-wrap ">
                        <h2 className="weather__title">CSS Weather Forecast</h2>
                        <img className="weather__img" src="./images/wi-sunset.svg" alt="Icon sunset"
                        />
                    </div>

                    <div className="weather__block">
                        <div className="weather__item lisabon">
                            <h3 className="weather__city">Lisabon</h3>
                            <div className="weather-wrap">
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
                            <div className="weather-wrap">
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
                            <div className="weather-wrap">
                                <p className="weather-wrap__temp">15°C</p>
                                <img
                                    className="weather-wrap__img"
                                    src="images/wi-night-cloudy.svg"
                                    alt="Icon night cloud"
                                />
                            </div>
                        </div>

                        <div className="weather__item venice">
                            <h3 className="weather__city ">Venice</h3>
                            <div className="weather-wrap">
                                <p className="weather-wrap__temp">21°C</p>
                                <img
                                    className="weather-wrap__img"
                                    src="images/wi-day-cloudy-high.svg"
                                    alt="Icon day cloudy high"
                                />
                            </div>
                        </div>
                        <div className="weather__item tel-avive">
                            <h3 className="weather__city ">Tel-Avive</h3>
                            <div className="weather-wrap">
                                <p className="weather-wrap__temp">32°C</p>
                                <img
                                    className="weather-wrap__img"
                                    src="images/wi-hot.svg"
                                    alt="Icon hot"
                                />
                            </div>
                        </div>
                        <div className="weather__item cair">
                            <h3 className="weather__city ">Cair</h3>
                            <div className="weather-wrap">
                                <p className="weather-wrap__temp">21°C</p>
                                <img
                                    className="weather-wrap__img"
                                    src="images/wi-day-sunny.svg"
                                    alt="Icon day sunny"
                                />
                            </div>
                        </div>
                        <div className="weather__item new-york">
                            <h3 className="weather__city ">New-York</h3>
                            <div className="weather-wrap">
                                <p className="weather-wrap__temp">17°C</p>
                                <img
                                    className="weather-wrap__img"
                                    src="images/wi-day-thunderstorm.svg"
                                    alt="Icon thunderstorm"
                                />
                            </div>
                        </div>
                        <div className="weather__item new-delhi">
                            <h3 className="weather__city ">New-Delhi</h3>
                            <div className="weather-wrap">
                                <p className="weather-wrap__temp">17°C</p>
                                <img
                                    className="weather-wrap__img"
                                    src="images/wi-rain-wind.svg"
                                    alt="Icon rain wind"
                                />
                            </div>
                        </div>
                        <div className="weather__item san-francisco">
                            <h3 className="weather__city ">San-Francisco</h3>
                            <div className="weather-wrap">
                                <p className="weather-wrap__temp">15°C</p>
                                <img
                                    className="weather-wrap__img"
                                    src="images/wi-day-cloudy-high.svg"
                                    alt="Icon day cloudy"
                                />
                            </div>
                        </div>
                        <div className="weather__item tokyo">
                            <h3 className="weather__city ">Tokyo</h3>
                            <div className="weather-wrap">
                                <p className="weather-wrap__temp">8°C</p>
                                <img
                                    className="weather-wrap__img"
                                    src="images/wi-night-clear.svg"
                                    alt="Icon night clear"
                                />
                            </div>
                        </div>
                        <div className="weather__item sydney">
                            <h3 className="weather__city ">Sydney</h3>
                            <div className="weather-wrap">
                                <p className="weather-wrap__temp">25°C</p>
                                <img
                                    className="weather-wrap__img"
                                    src="images/wi-day-sunny.svg"
                                    alt="Icon day sunny"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <p className="last-massege">Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
            </main>
        </>
    )
};
