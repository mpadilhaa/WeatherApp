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
              <div className="details-temp">
                <TemperatureDetails icon={<PiWindLight size={30} />}>
                  {data.wind.speed.toFixed(2)}
                  km/h
                </TemperatureDetails>
                <TemperatureDetails icon={<WiHumidity size={30} />}>
                  {data.main.humidity} %{" "}
                </TemperatureDetails>
                <TemperatureDetails
                  icon={<GrSun size={30} style={{ color: "yellow" }} />}
                >
                  {data.timezone > 0
                    ? formatHour(data.sys.sunset)
                    : formatHour(data.sys.sunrise)}
                  AM
                </TemperatureDetails>
                <TemperatureDetails icon={<GrMoon size={30} />}>
                  {data.timezone < 0
                    ? formatHour(data.sys.sunset)
                    : formatHour(data.sys.sunrise)}
                  PM
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
