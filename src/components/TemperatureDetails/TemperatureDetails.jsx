import "./TemperatureDetails.css";

const TemperatureDetails = ({ children, icon }) => {
  return (
    <div className="Icons">
      <span>{icon}</span>
      <p>{children}</p>
    </div>
  );
};

export default TemperatureDetails;
