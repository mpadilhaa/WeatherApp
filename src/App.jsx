import { useRef, useState } from "react";
import "./App.css";
import { createClient } from "pexels";

import TemperatureDetails from "./components/TemperatureDetails/TemperatureDetails";

import axios from "axios";

function App() {
  const inputRef = useRef();
  const [city, setCity] = useState("Florianopolis");

  const [location, setLocation] = useState("");
  const [images, setImages] = useState([]);

  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q= ${city}&appid=8b32c61e6740d29e46f5ac6611825048&units=metric&lang=pt_br`;

  const searchImage = () => {
    const client = createClient(
      "m9GXfnNt6RRq8219EtFZxevyIBTXPholawTumBti0QkG3JmbNWxu4SWX"
    );

    const query = city;
    client.photos.search({ query }).then((data) => setImages(data.photos));
  };

  const searchLocation = (e) => {
    e.preventDefault();

    axios.get(WEATHER_API).then((res) => {
      setLocation(res.data);
    });

    searchImage();
    setCity("");
  };

  console.log(images);
  console.log(location);

  return (
    <>
      <div className="w-body">
        <img className="img-background" src={images[0]?.src.landscape} alt="" />
        <form className="search-form" onSubmit={searchLocation}>
          <input
            className="search"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </form>
        <div className="info-weather">
          <div className="city-and-icon">
            <h1 className="city">{location.name},</h1>
          </div>
          <div className="time-and-day">
            <h1 className="day">
              {}
              <span className="time">{}</span>
            </h1>
          </div>
          <div className="temperature">
            <div className="temperature-celcius">
              <h1 className="temperature-value">{location.main.temp}</h1>
              <span className="temperature-type">°C</span>
            </div>
            <div className="min-and-max">
              <span className="min">{location.main.temp_min.toFixed(0)}</span>
              <span>|</span>
              <span className="max">{location.main.temp_max.toFixed(0)}</span>
            </div>
          </div>
        </div>
        <TemperatureDetails />
      </div>
    </>
  );
}

export default App;
