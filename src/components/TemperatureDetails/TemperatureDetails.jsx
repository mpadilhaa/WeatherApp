import React from "react";

const TemperatureDetails = ({ children, icon }) => {
  return (
    <div>
      <span>{icon}</span>
      <p>{children}</p>
    </div>
  );
};

export default TemperatureDetails;
