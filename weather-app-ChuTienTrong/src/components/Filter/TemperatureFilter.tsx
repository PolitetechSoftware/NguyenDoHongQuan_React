import React from "react";
import Slider from "../Slider";
import "./styles.css"; // Create this CSS file for styling

interface TemperatureFilterProps {
  minTemp: number;
  maxTemp: number;
  onChange: (minTemp: number, maxTemp: number) => void;
  tempUnit: "C" | "F";
}

const TemperatureFilter: React.FC<TemperatureFilterProps> = ({
  minTemp,
  maxTemp,
  onChange,
  tempUnit,
}) => {
  return (
    <div className="temperature-filter">
      <h3>Temperature:</h3>
      <Slider
        min={-40}
        max={40}
        gap={1}
        onChange={onChange}
        isShowValue
        renderValue={{
          minValue: (
            <div>
              {minTemp}°{tempUnit}
            </div>
          ),
          maxValue: (
            <div>
              {maxTemp}°{tempUnit}
            </div>
          ),
        }}
      ></Slider>
    </div>
  );
};

export default TemperatureFilter;
