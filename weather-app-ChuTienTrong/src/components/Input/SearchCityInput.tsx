import React from "react";
import "./styles.css";

interface SearchCityInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const SearchCityInput: React.FC<SearchCityInputProps> = (props) => {
  return (
    <div className="input-field">
      <input
        type="text"
        placeholder="Type a city name..."
        aria-label="City Name"
        {...props}
      />
      {/* {props.label && <label>{props.label}</label>} */}
    </div>
  );
};

export default SearchCityInput;
