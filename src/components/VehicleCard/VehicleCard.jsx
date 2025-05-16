import css from "./VehicleCard.module.css";
import carLogo from "../../assets/car-logo.jpg";
import Button from "../Button/Button";

const VehicleCard = ({
  id,
  img,
  brand,
  model,
  year,
  rentalPrice,
  address,
  rentalCompany,
  type,
  mileage,
}) => {
  const splitAddress = address.split(", ").slice(1);

  const formattedMileage = mileage.toLocaleString("ru-RU");

  return (
    <>
      <div className={css["info-container"]}>
        {img ? (
          <img
            src={img}
            alt={`${brand} ${model}`}
            className={css["card-img"]}
          />
        ) : (
          <img
            src={carLogo}
            alt={`${brand} ${model}`}
            className={css["card-img"]}
          />
        )}

        <div className={css["general-container"]}>
          <div className={css["main-container"]}>
            <p className={css["main-text"]}>
              {brand} <span className={css.span}>{model}</span>, {year}
            </p>
            <p className={css["main-text"]}>${rentalPrice}</p>
          </div>

          <div>
            <p className={css["extra-text"]}>
              {splitAddress.join(" | ")} | {rentalCompany} |
            </p>
            <p className={css["extra-text"]}>
              {type} | {formattedMileage} km
            </p>
          </div>
        </div>
      </div>

      <Button to={`/catalog/${id}`}>Read more</Button>
    </>
  );
};

export default VehicleCard;
