import css from "./VehicleCard.module.css";
import carLogo from "../../assets/car-logo.jpg";
import Button from "../Button/Button";
import icons from "../../assets/icons.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../redux/vehicles/selectors";
import { addFavourite, removeFavourite } from "../../redux/vehicles/slice";
import { formattedMileage, splitAddress } from "../../utils/utils";

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
  const dispatch = useDispatch();

  const favourites = useSelector(selectFavourites);

  const isFavourite = favourites.includes(id);

  const handleToggleFavourite = () =>
    isFavourite ? dispatch(removeFavourite(id)) : dispatch(addFavourite(id));

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

        <svg className={css.heart} onClick={handleToggleFavourite}>
          <use
            href={
              isFavourite ? `${icons}#icon-heart-active` : `${icons}#icon-heart`
            }
          ></use>
        </svg>

        <div className={css["general-container"]}>
          <div className={css["main-container"]}>
            <p className={css["main-text"]}>
              {brand} <span className="accent">{model}</span>, {year}
            </p>
            <p className={css["main-text"]}>${rentalPrice}</p>
          </div>

          <div>
            <p className={css["extra-text"]}>
              {splitAddress(address).join(" | ")} | {rentalCompany} |
            </p>
            <p className={css["extra-text"]}>
              {type} | {formattedMileage(mileage)} km
            </p>
          </div>
        </div>
      </div>

      <Button to={`/catalog/${id}`}>Read more</Button>
    </>
  );
};

export default VehicleCard;
