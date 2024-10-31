import React from "react";
import "./App.css";
import WeatherApp from "./pages/weather/WeatherApp";

const App: React.FC = () => {
  return (
    <div className="app">
      <WeatherApp />
    </div>
  );
};

export default App;
