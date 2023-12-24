import React from "react";
import "./Input.css";
import { IoSearchSharp } from "react-icons/io5";

const WeatherInput = ({ fnChangedValue, submitForm }) => {
  return (
    <div className="form-search">
      <form className="form" onSubmit={submitForm}>
        <input className="search" type="text" ref={fnChangedValue} />
        <div className="icon-search">
          <IoSearchSharp />
        </div>
      </form>
    </div>
  );
};

export default WeatherInput;
