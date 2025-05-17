import VehicleFeatureCard from "../VehicleFeatureCard/VehicleFeatureCard";

const VehicleFeatureList = ({ accessories, functionalities, conditions }) => {
  return (
    <ul className="list">
      {conditions &&
        conditions.map((condition, index) => (
          <li key={`condition-${index}`} className="item">
            <VehicleFeatureCard prop={condition} />
          </li>
        ))}
      {accessories &&
        accessories.map((accessory, index) => (
          <li key={`accessory-${index}`} className="item">
            <VehicleFeatureCard prop={accessory} />
          </li>
        ))}
      {functionalities &&
        functionalities.map((functionality, index) => (
          <li key={`functionality-${index}`} className="item">
            <VehicleFeatureCard prop={functionality} />
          </li>
        ))}
    </ul>
  );
};

export default VehicleFeatureList;
