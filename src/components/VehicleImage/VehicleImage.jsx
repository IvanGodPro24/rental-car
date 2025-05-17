import css from "./VehicleImage.module.css";

const VehicleImage = ({ img, brand, model }) => {
  return <img src={img} alt={`${brand} ${model}`} className={css.img} />;
};

export default VehicleImage;
