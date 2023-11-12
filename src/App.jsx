import "./App.css";
import Input from "./components/Input/Input";
import TemperatureDetails from "./components/TemperatureDetails/TemperatureDetails";

function App() {
  return (
    <div className="w-body">
      <Input />
      <div className="info-weather">
        <div className="city-and-icon">
          <h1 className="city">
            {}
            <span className="country">{}</span>
          </h1>
        </div>
        <div className="time-and-day">
          <h1 className="day">
            {}
            <span className="time">{}</span>
          </h1>
        </div>
      </div>
      <div className="temperature">
        <div className="temperature-celcius">
          <h1 className="temperature-value">{}</h1>
          <span className="temperature-type"></span>
        </div>
        <div className="min-and-max">
          <span className="min">{}</span>
          <span>|</span>
          <span className="min">{}</span>
        </div>
      </div>
      <TemperatureDetails />
    </div>
  );
}

export default App;
