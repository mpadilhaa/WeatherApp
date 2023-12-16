import React from "react";
import "./Input.css";

const WeatherInput = ({ fnChangedValue, submitForm }) => {
  return (
    <form className="search-form" onSubmit={submitForm}>
      <input className="search" type="text" ref={fnChangedValue} />
    </form>
  );
};

export default WeatherInput;
