import icons from "../../assets/icons.svg";

const VehicleFeatureCard = ({ prop }) => {
  return (
    <>
      <svg className="icon">
        <use href={`${icons}#icon-check`}></use>
      </svg>
      <p>{prop}</p>
    </>
  );
};

export default VehicleFeatureCard;
