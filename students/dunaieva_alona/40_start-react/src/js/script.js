import React from "react";
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));

function getSomeLayout() {
  return (
    <div className="container">
      <h1 className="weather__title">
        CSS Weather Forecast
        <img
          className="weather__img-main"
          src="images/icon-title.svg"
          alt="icon-title"
        />
      </h1>
      <div className="weather-wrapper">
        <div className="weather-wrapper__lisabon block-weather">
          <h2 className="block-weather__title">Lisabon</h2>
          <p className="block-weather__temp">
            21°C
            <span>
              <img className="temp-img" src="images/sunny.svg" alt="icon-weather" />
            </span>
          </p>
        </div>
        <div className="weather-wrapper__paris block-weather">
          <h2 className="block-weather__title">Paris</h2>
          <p className="block-weather__temp">
            11°C
            <span>
              <img className="temp-img" src="images/rainy.svg" alt="icon-weather" />
            </span>
          </p>
        </div>
        <div className="weather-wrapper__belgrade block-weather">
          <h2 className="block-weather__title">Belgrade</h2>
          <p className="block-weather__temp">
            15°C
            <span>
              <img
                className="temp-img"
                src="images/cloudy-with-sunshine.svg"
                alt="icon-weather"
              />
            </span>
          </p>
        </div>
        <div className="weather-wrapper__venice block-weather">
          <h2 className="block-weather__title">Venice</h2>
          <p className="block-weather__temp">
            21°C
            <span>
              <img
                className="temp-img"
                src="images/cloudy-with-sunshine-down.svg"
                alt="icon-weather"
              />
            </span>
          </p>
        </div>
        <div className="weather-wrapper__tel-avive block-weather">
          <h2 className="block-weather__title">Tel-Avive</h2>
          <p className="block-weather__temp">
            32°C
            <span>
              <img className="temp-img" src="images/heat.svg" alt="icon-weather" />
            </span>
          </p>
        </div>
        <div className="weather-wrapper__cair block-weather">
          <h2 className="block-weather__title">Cair</h2>
          <p className="block-weather__temp">
            21°C
            <span>
              <img className="temp-img" src="images/sunny.svg" alt="icon-weather" />
            </span>
          </p>
        </div>
        <div className="weather-wrapper__new-york block-weather">
          <h2 className="block-weather__title">New-York</h2>
          <p className="block-weather__temp">
            17°C
            <span>
              <img className="temp-img" src="images/storm.svg" alt="icon-weather" />
            </span>
          </p>
        </div>
        <div className="weather-wrapper__new-delhi block-weather">
          <h2 className="block-weather__title">New-Delhi</h2>
          <p className="block-weather__temp">
            17°C
            <span>
              <img
                className="temp-img"
                src="images/rainstorm.svg"
                alt="icon-weather"
              />
            </span>
          </p>
        </div>
        <div className="weather-wrapper__san-francisco block-weather">
          <h2 className="block-weather__title">San-Francisco</h2>
          <p className="block-weather__temp">
            15°C
            <span>
              <img
                className="temp-img"
                src="images/cloudy-with-sunshine.svg"
                alt="icon-weather"
              />
            </span>
          </p>
        </div>
        <div className="weather-wrapper__tokyo block-weather">
          <h2 className="block-weather__title">Tokyo</h2>
          <p className="block-weather__temp">
            8°C
            <span>
              <img className="temp-img" src="images/moon.svg" alt="icon-weather" />
            </span>
          </p>
        </div>
        <div className="weather-wrapper__sydney block-weather">
          <h2 className="block-weather__title">Sydney</h2>
          <p className="block-weather__temp">
            25°C
            <span>
              <img
                className="temp-img"
                src="images/moon-cloudly.svg"
                alt="icon-weather"
              />
            </span>
          </p>
        </div>
      </div>
      <p className="weather__subtext">
        Have a nice day and don't forget umbrella if you are in New Delhi now!
      </p>
    </div>
  )
}

root.render(React.createElement(getSomeLayout));
