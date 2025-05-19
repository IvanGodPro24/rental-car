import css from "./VehicleImage.module.css";

const VehicleImage = ({ img, brand, model, onClick }) => {
  return (
    <img
      src={img}
      alt={`${brand} ${model}`}
      className={css.img}
      onClick={onClick}
    />
  );
};

export default VehicleImage;
