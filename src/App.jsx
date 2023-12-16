import { useState, useRef } from "react";
import "./App.css";

import TemperatureDetails from "./components/TemperatureDetails/TemperatureDetails";
import { apiWeatherCall, apiPexelsCall } from "./utils/useCallApi";
import WeatherInput from "./components/WeatherInput/WeatherInput";
import TemperatureData from "./components/TemperatureData/TemperatureData";

function App() {
  const [data, setData] = useState([] | null);
  const [photo, setPhoto] = useState([] | null);

  const cityName = useRef(null);

  function submitForm(e) {
    e.preventDefault();
    apiWeatherCall(cityName.current?.value).then((data) => setData(data));
    apiPexelsCall(cityName.current?.value, setPhoto);

    cityName.current.value = "";
  }

  return (
    <>
      {!data && (
        <WeatherInput fnChangedValue={cityName} submitForm={submitForm} />
      )}
      {data && photo ? (
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
              </TemperatureDetails>
              <TemperatureDetails>{data.main.humidity}</TemperatureDetails>
              <TemperatureDetails>
                {new Date(data.sys.sunrise * 1000).getHours()}
              </TemperatureDetails>
              <TemperatureDetails>
                {new Date(data.sys.sunset * 1000).getHours()}
              </TemperatureDetails>
            </div>
          </div>
        </div>
      ) : (
        <h1>carregando</h1>
      )}
    </>
  );
}

export default App;
