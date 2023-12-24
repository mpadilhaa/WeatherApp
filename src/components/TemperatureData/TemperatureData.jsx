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
          <div className="min">
            <h3>{Math.floor(data.main.temp_min)}</h3>
            <small>°C</small>
          </div>
          <div>|</div>
          <div className="max">
            <h3>{Math.floor(data.main.temp_max)}</h3>
            <small>°C</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureData;
