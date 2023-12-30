import React from "react";
import "./Input.css";
import { IoSearchSharp } from "react-icons/io5";

const WeatherInput = ({ VariableWhite = true, fnChangedValue, submitForm }) => {
  return (
    <div className="form-search">
      <form className="form" onSubmit={submitForm}>
        <input
          className={VariableWhite ? "search" : "search-white"}
          type="text"
          ref={fnChangedValue}
        />
        <div className={VariableWhite ? "icon-search" : "icon-search-black"}>
          <IoSearchSharp />
        </div>
      </form>
    </div>
  );
};

export default WeatherInput;
