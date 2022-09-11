import React from "react";
import "../stylesheets/WeatherWidget.css";
import WeatherRafiki from "../Weather-rafiki.png";
import Dashboard from "./Dashboard";
import LocWidget from "./weatherWidgets/LocWidget";
import TempWidget from "./weatherWidgets/TempWidget";
import Widgets from "./weatherWidgets/Widgets";

function WeatherWidget() {
  return (
    <div className="weather-widget">
      <div className="widgets-wrapper">  
        <Widgets/>
        <LocWidget/>
        <TempWidget/>
        <div className="icon">
          <img src={WeatherRafiki} alt="weather img" />
        </div>
      </div>
      <Dashboard />
    </div>
  );
}

export default WeatherWidget;
