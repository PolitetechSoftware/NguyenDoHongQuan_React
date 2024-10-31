import React from "react";
import { WeatherDescription } from "types/weather";
import { capitalizeFirstLetter, convertTemperature } from "utils";
import { weatherStyles } from "utils/constants";
import "./styles.css";

interface WeatherCardProps {
  name: string;
  temperature: number;
  windSpeed: number;
  humidity: number;
  description: WeatherDescription;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  name,
  temperature,
  windSpeed,
  humidity,
  description,
}) => {
  const [temperatureType, setTemperatureType] = React.useState("C");
  const { icon } = description;
  const isDaytime = icon.includes("d");
  const weatherType = description.main;
  const style = weatherStyles[weatherType]
    ? weatherStyles[weatherType][isDaytime ? "day" : "night"]
    : { background: "#e0e0e0", color: "#000" }; // Default style if no match

  return (
    <div
      className={`weather-card `}
      style={{ ...style }}
      role="region"
      aria-labelledby="weather-info"
    >
      <div className="weather-info">
        <div className="weather-info-left">
          {/* <div className="weather-temperature">{`${temperature || 0}°C`}</div> */}
          <div className="weather-temperature">
            <span>
              {temperatureType === "F"
                ? convertTemperature(temperature, "F").toFixed(2)
                : temperature || 0}
            </span>
            <span className="units">
              <span
                style={{
                  ...(temperatureType === "F" && {
                    color: "#9fe5e1",
                    cursor: "pointer",
                  }),
                }}
                onClick={() => setTemperatureType("C")}
              >
                °C
              </span>
              |
              <span
                style={{
                  ...(temperatureType === "C" && {
                    color: "#9fe5e1",
                    cursor: "pointer",
                  }),
                }}
                onClick={() => setTemperatureType("F")}
              >
                °F
              </span>
            </span>
          </div>
          <div className="weather-location">{name}</div>
          <div className="weather-condition-description">
            {capitalizeFirstLetter(description.description)}
          </div>
        </div>
        <div className="weather-info-right">
          <div className="weather-icon">
            <img
              src={`https://openweathermap.org/img/wn/${description.icon}@2x.png`}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="weather-description grid-item">
        <div>
          <span style={{ fontWeight: 600 }}>Humidity:</span> {humidity || 0} %
        </div>
        <div>
          <span style={{ fontWeight: 600 }}>Wind:</span> {windSpeed || 0} m/s
        </div>
        <div></div>
        {/* <span className="close-btn">✖</span> */}
      </div>
    </div>
  );
};

export default WeatherCard;
