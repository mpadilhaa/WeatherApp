import { useState, useRef } from "react";
import "./App.css";

import TemperatureDetails from "./components/TemperatureDetails/TemperatureDetails";
import WeatherInput from "./components/WeatherInput/WeatherInput";
import TemperatureData from "./components/TemperatureData/TemperatureData";
import { apiWeatherCall, apiPexelsCall } from "./utils/useCallApi";

//icons
import { PiWindLight } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { GrSun } from "react-icons/gr";
import { GrMoon } from "react-icons/gr";
import CardError from "./components/CardError/CardError";

function App() {
  const [data, setData] = useState([] | null);
  const [photo, setPhoto] = useState([] | null);

  const cityName = useRef(null);

  const formatHour = (valueHours) => {
    return new Date(valueHours * 1000).getHours();
  };

  async function submitForm(e) {
    e.preventDefault();

    const weatherData = await apiWeatherCall(cityName.current?.value);

    const photoData = await apiPexelsCall(cityName.current?.value);
    if (weatherData.name) {
      setData(weatherData);
      setPhoto(photoData);
    } else {
      <CardError />;
    }
  }
  return (
    <>
      {photo ? (
        <div className="w-body">
          <img
            className="img-background"
            alt=""
            src={photo.photos[0].src.landscape}
          />
          <WeatherInput fnChangedValue={cityName} submitForm={submitForm} />
          <div className="info-weather">
            <TemperatureData data={data} />
            <div>
              <div className="details-temp">
                <TemperatureDetails icon={<PiWindLight size={30} />}>
                  {data.wind.speed.toFixed(2)}{" "}
                  <small className="am-pm">km/h</small>
                </TemperatureDetails>
                <TemperatureDetails icon={<WiHumidity size={30} />}>
                  {data.main.humidity}
                  <small className="am-pm">%</small>
                </TemperatureDetails>
                <TemperatureDetails
                  icon={<GrSun size={30} style={{ color: "yellow" }} />}
                >
                  {data.timezone > 0
                    ? formatHour(data.sys.sunset)
                    : formatHour(data.sys.sunrise)}
                  <small className="am-pm">AM</small>
                </TemperatureDetails>
                <TemperatureDetails icon={<GrMoon size={30} />}>
                  {data.timezone < 0
                    ? formatHour(data.sys.sunset)
                    : formatHour(data.sys.sunrise)}
                  <small className="am-pm">PM</small>
                </TemperatureDetails>
              </div>
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
