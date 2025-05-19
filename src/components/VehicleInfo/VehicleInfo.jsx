import { formatId, formattedMileage, splitAddress } from "../../utils/utils";
import css from "./VehicleInfo.module.css";
import icons from "../../assets/icons.svg";
import clsx from "clsx";

const VehicleInfo = ({
  brand,
  model,
  year,
  id,
  address,
  mileage,
  rentalPrice,
  description,
}) => {
  return (
    <>
      <div className={clsx(css["info-container"], css["margin-sm"])}>
        <h2 className={css["main-text"]}>
          {brand} {model}, {year}
        </h2>

        <p className={css["extra-text"]}>Id: {formatId(id)}</p>
      </div>

      <div className={clsx(css["info-container"], css["margin-med"])}>
        <div className={clsx(css["info-container"], css["location-container"])}>
          <svg className="icon">
            <use href={`${icons}#icon-location`}></use>
          </svg>
          <p className={css["secondary-text"]}>
            {splitAddress(address).join(", ")}
          </p>
        </div>

        <div>
          <p className={css["secondary-text"]}>
            Mileage: {formattedMileage(mileage)} km
          </p>
        </div>
      </div>

      <p className={clsx(css.price, "accent")}>${rentalPrice}</p>
      <p className={clsx(css["secondary-text"], css.description)}>
        {description}
      </p>
    </>
  );
};

export default VehicleInfo;
