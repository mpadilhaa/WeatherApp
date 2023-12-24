import { useState, useRef } from "react";
import "./App.css";

import TemperatureDetails from "./components/TemperatureDetails/TemperatureDetails";
import WeatherInput from "./components/WeatherInput/WeatherInput";
import TemperatureData from "./components/TemperatureData/TemperatureData";
import { apiWeatherCall, apiPexelsCall } from "./utils/useCallApi";

function App() {
  const [data, setData] = useState([] | null);
  const [photo, setPhoto] = useState([] | null);

  const cityName = useRef(null);

  const formatHour = (valueHours) => {
    return new Date(valueHours * 1000).getHours();
  };

  async function submitForm(e) {
    e.preventDefault();

    await apiWeatherCall(cityName.current?.value).then((data) => {
      setData(data);
    });
    await apiPexelsCall(cityName.current?.value).then((photo) =>
      setPhoto(photo)
    );

    cityName.current.value = "";
  }

  return (
    <>
      {photo ? (
        <div className="w-body">
          <img
            className="img-background"
            alt=""
            src={photo.photos[1].src.landscape}
          />
          <WeatherInput fnChangedValue={cityName} submitForm={submitForm} />
          <div className="info-weather">
            <TemperatureData data={data} />
            <div>
              <TemperatureDetails>
                {data.wind.speed.toFixed(0)}
                km/h
              </TemperatureDetails>
              <TemperatureDetails>{data.main.humidity} % </TemperatureDetails>
              <TemperatureDetails>
                {formatHour(data.sys.sunrise)}
                AM
              </TemperatureDetails>
              <TemperatureDetails>
                {formatHour(data.sys.sunset)}
                PM
              </TemperatureDetails>
            </div>
          </div>
        </div>
      ) : (
        <WeatherInput fnChangedValue={cityName} submitForm={submitForm} />
      )}
    </>
  );
}

export default App;
