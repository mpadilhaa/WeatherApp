import React from "react";
import "./TemperatureData.css";

const TemperatureData = ({ data }) => {
  return (
    <div className="temperature">
      <div className="city-and-icon">
        <h1 className="city">
          {data.name},<span className="city-country"> {data.sys.country}</span>
        </h1>
      </div>
      <div className="detail-temp">
        <div className="temperature-celcius">
          <h1 className="temperature-value">{Math.floor(data.main.temp)} </h1>
          <span className="temperature-type">°C</span>
        </div>
        <div className="min-and-max">
          <span className="min">
            {Math.floor(data.main.temp_min)} <small>°C</small>
          </span>
          <span>|</span>
          <span className="max">
            {Math.floor(data.main.temp_max)} <small>°C</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TemperatureData;
