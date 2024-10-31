import React from "react";
import { City } from "../../../types/city";
import WeatherCard from "./WeatherCard";

interface WeatherListProps {
  data: City[];
}

const WeatherList: React.FC<WeatherListProps> = ({ data }) => {
  return (
    <div className="weather-list">
      {data.map((weather) => (
        <WeatherCard
          key={weather.name}
          name={`${weather.name}, ${weather.sys.country}`}
          temperature={weather.main.temp}
          windSpeed={weather.wind.speed}
          humidity={weather.main.humidity}
          description={weather.weather[0]}
        />
      ))}
    </div>
  );
};

export default WeatherList;
