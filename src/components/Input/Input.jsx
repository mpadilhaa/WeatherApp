import React from "react";
import "./Input.css";

const Input = ({ fnChangedValue }) => {
  return (
    <div className="input">
      <input className="input-text" type="text" onChange={fnChangedValue} />
    </div>
  );
};

export default Input;
