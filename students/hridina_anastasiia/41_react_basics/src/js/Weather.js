import React from "react";

function Weather() {
    return (
        <main className="main">
            <section className="weather__block">
                <div className="container">
                    <div className="weather__heading">
                        <h3 className="weather__title">CSS Weather Forecast</h3>
                        <img className="weather__title-img"
                            src="images/sun_heading.svg"
                            alt="weather forecast icon"
                        />
                    </div>
                    <div className="weather__forecast">
                        <div className="weather-forecast lisbon">
                            <h3 className="weather-forecast__title">Lisbon</h3>
                            <div className="weather-forecast__container">
                                <p className="weather-forecast__temp">21°C</p>
                                <img className="weather-forecast__title-img"
                                    src="images/sunny.svg"
                                    alt="weather forecast icon"
                                />
                            </div>
                        </div>
                        <div className="weather-forecast paris">
                            <h3 className="weather-forecast__title">Paris</h3>
                            <div className="weather-forecast__container">
                                <p className="weather-forecast__temp">11°C</p>
                                <img className="weather-forecast__title-img"
                                    src="images/partlycloudywrain.svg"
                                    alt="weather forecast icon"
                                />
                            </div>
                        </div>
                        <div className="weather-forecast belgrade">
                            <h3 className="weather-forecast__title">Belgrade</h3>
                            <div className="weather-forecast__container">
                                <p className="weather-forecast__temp">15°C</p>
                                <img className="weather-forecast__title-img"
                                    src="images/partly_cloudy.svg"
                                    alt="weather forecast icon"
                                />
                            </div>
                        </div>
                        <div className="weather-forecast venice">
                            <h3 className="weather-forecast__title">Venice</h3>
                            <div className="weather-forecast__container">
                                <p className="weather-forecast__temp">21°C</p>
                                <img className="weather-forecast__title-img"
                                    src="images/partly_sunny.svg"
                                    alt="weather forecast icon"
                                />
                            </div>
                        </div>
                        <div className="weather-forecast tel-aviv">
                            <h3 className="weather-forecast__title">Tel-Aviv</h3>
                            <div className="weather-forecast__container">
                                <p className="weather-forecast__temp">32°C</p>
                                <img className="weather-forecast__title-img"
                                    src="images/sunnyandhot.svg"
                                    alt="weather forecast icon"
                                />
                            </div>
                        </div>
                        <div className="weather-forecast cairo">
                            <h3 className="weather-forecast__title">Cairo</h3>
                            <div className="weather-forecast__container">
                                <p className="weather-forecast__temp">21°C</p>
                                <img className="weather-forecast__title-img"
                                    src="images/sunny.svg"
                                    alt="weather forecast icon"
                                />
                            </div>
                        </div>
                        <div className="weather-forecast new-york">
                            <h3 className="weather-forecast__title">New-York</h3>
                            <div className="weather-forecast__container">
                                <p className="weather-forecast__temp">17°C</p>
                                <img className="weather-forecast__title-img"
                                    src="images/sunandstorm.svg"
                                    alt="weather forecast icon"
                                />
                            </div>
                        </div>
                        <div className="weather-forecast new-delhi">
                            <h3 className="weather-forecast__title">New-Delhi</h3>
                            <div className="weather-forecast__container">
                                <p className="weather-forecast__temp">17°C</p>
                                <img className="weather-forecast__title-img"
                                    src="images/heavyrain.svg"
                                    alt="weather forecast icon"
                                />
                            </div>
                        </div>
                        <div className="weather-forecast san-francisco">
                            <h3 className="weather-forecast__title">San-Francisco</h3>
                            <div className="weather-forecast__container">
                                <p className="weather-forecast__temp">15°C</p>
                                <img className="weather-forecast__title-img"
                                    src="images/mostlysunny.svg"
                                    alt="weather forecast icon"
                                />
                            </div>
                        </div>
                        <div className="weather-forecast tokyo">
                            <h3 className="weather-forecast__title">Tokyo</h3>
                            <div className="weather-forecast__container">
                                <p className="weather-forecast__temp">8°C</p>
                                <img className="weather-forecast__title-img"
                                    src="images/clearnight.svg"
                                    alt="weather forecast icon"
                                />
                            </div>
                        </div>
                        <div className="weather-forecast sydney">
                            <h3 className="weather-forecast__title">Sydney</h3>
                            <div className="weather-forecast__container">
                                <p className="weather-forecast__temp">25°C</p>
                                <img className="weather-forecast__title-img"
                                    src="images/partlycloudynight.svg"
                                    alt="weather forecast icon"
                                />
                            </div>
                        </div>
                    </div>
                    <p class="bottom__text">Have a nice day and don't forget umbrella if you are in New Delhi now!</p>
                </div>
            </section>
        </main >
    )
}

export default Weather;
