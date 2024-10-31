import TemperatureFilter from "components/Filter/TemperatureFilter";
import SearchCityInput from "components/Input/SearchCityInput";
import Spin from "components/Spin";
import useCitySearch from "hooks/useCitySearch";
import useDebounce from "hooks/useDebounce";
import WeatherList from "pages/weather/components/WeatherList";
import React, { useState } from "react";
import "./styles.css";

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState("");
  const debouncedInputValue = useDebounce(city, 300); // Debounce with 300ms delay

  const [minTemp, setMinTemp] = useState<number>(0);
  const [maxTemp, setMaxTemp] = useState<number>(40);
  const { cities, loading, error } = useCitySearch(
    debouncedInputValue,
    minTemp,
    maxTemp
  );

  console.log("data----- >", cities);
  const handleTemperatureChange = (min: number, max: number) => {
    setMinTemp(min);
    setMaxTemp(max);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  return (
    <div className="weather-container">
      <h1 className="title">Weather App</h1>
      <SearchCityInput
        value={city}
        onChange={handleInputChange}
        label="City Name"
      />
      <TemperatureFilter
        minTemp={minTemp}
        maxTemp={maxTemp}
        onChange={handleTemperatureChange}
        tempUnit="C"
      />
      {loading && <Spin />}
      {cities && cities.length > 0 && <WeatherList data={cities} />}
    </div>
  );
};

export default WeatherApp;
