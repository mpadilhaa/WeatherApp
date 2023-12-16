import { useState, useRef } from "react";
import "./App.css";

import TemperatureDetails from "./components/TemperatureDetails/TemperatureDetails";
import { apiWeatherCall, apiPexelsCall } from "./utils/useCallApi";
import WeatherInput from "./components/WeatherInput/WeatherInput";

function App() {
  const [data, setData] = useState([]);
  const [photo, setPhoto] = useState([]);

  const cityName = useRef(null);

  function submitForm(e) {
    e.preventDefault();
    apiWeatherCall(cityName.current?.value).then((data) => setData(data));
    apiPexelsCall(cityName.current?.value, setPhoto);
    console.log(data);
    console.log(photo);
  }
  return (
    <>
      {data ? (
        <div className="w-body">
          <img
            className="img-background"
            alt=""
            src={photo.photos[0].src.landscape}
          />
          <WeatherInput fnChangedValue={cityName} submitForm={submitForm} />
          <div className="info-weather">
            <div className="city-and-icon">
              <h1 className="city">{data.name},</h1>
            </div>
            <div className="time-and-day">
              <h1 className="day">
                {}
                <span className="time">{}</span>
              </h1>
            </div>
            <div className="temperature">
              <div className="temperature-celcius">
                <h1 className="temperature-value">
                  {data.main.temp.toFixed(0)}
                </h1>
                <span className="temperature-type">°C</span>
              </div>
              <div className="min-and-max">
                <span className="min"></span>
                <span>|</span>
                <span className="max"></span>
              </div>
            </div>
          </div>
          <TemperatureDetails />
        </div>
      ) : (
        "oi"
      )}
    </>
  );
}

export default App;
