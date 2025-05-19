import css from "./FavouritesCard.module.css";
import carLogo from "../../assets/car-logo.jpg";
import Button from "../Button/Button";

const FavouritesCard = ({
  id,
  img,
  brand,
  model,
  year,
  rentalPrice,
  onClick,
}) => {
  return (
    <Button to={`/catalog/${id}`} unstyled={true} onClick={onClick}>
      <div>
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

        <div className={css["main-container"]}>
          <p>
            {brand} <span className="accent">{model}</span>, {year}
          </p>
          <p>${rentalPrice}</p>
        </div>
      </div>
    </Button>
  );
};

export default FavouritesCard;
