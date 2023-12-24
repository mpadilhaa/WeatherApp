import "./TemperatureDetails.css";

const TemperatureDetails = ({ children, icon }) => {
  return (
    <div className="icons">
      <div>{icon}</div>
      <p>{children}</p>
    </div>
  );
};

export default TemperatureDetails;
