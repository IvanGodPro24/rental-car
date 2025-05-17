import VehicleSpecificationCard from "../VehicleSpecificationCard/VehicleSpecificationCard";
import css from "./VehicleSpecificationList.module.css";
import icons from "../../assets/icons.svg";

const VehicleSpecificationList = ({
  year,
  type,
  engineSize,
  fuelConsumption,
}) => {
  const specifications = [
    {
      icon: (
        <svg className="icon">
          <use href={`${icons}#icon-calendar`}></use>
        </svg>
      ),
      label: "Year",
      value: year,
    },
    {
      icon: (
        <svg className="icon">
          <use href={`${icons}#icon-car`}></use>
        </svg>
      ),
      label: "Type",
      value: type,
    },
    {
      icon: (
        <svg className="icon">
          <use href={`${icons}#icon-fuel`}></use>
        </svg>
      ),
      label: "Fuel Consumption",
      value: fuelConsumption,
    },
    {
      icon: (
        <svg className="icon">
          <use href={`${icons}#icon-gear`}></use>
        </svg>
      ),
      label: "Engine Size",
      value: engineSize,
    },
  ];

  return (
    <ul className="list">
      {specifications.map(({ icon, label, value }, index) => (
        <li key={index} className="item">
          <VehicleSpecificationCard icon={icon} label={label} value={value} />
        </li>
      ))}
    </ul>
  );
};

export default VehicleSpecificationList;
