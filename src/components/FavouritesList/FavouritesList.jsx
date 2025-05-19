import FavouritesCard from "../FavouritesCard/FavouritesCard";
import css from "./FavouritesList.module.css";

const FavouritesList = ({ favourites, onItemClick }) => {
  if (favourites.length === 0) {
    return (
      <p className="empty">
        You have not added any cars to your favorites yet.
      </p>
    );
  }

  return (
    <ul className={css.list}>
      {favourites.map(({ id, img, brand, model, year, rentalPrice }) => (
        <li key={id} className={css.item}>
          <FavouritesCard
            id={id}
            img={img}
            brand={brand}
            model={model}
            year={year}
            rentalPrice={rentalPrice}
            onClick={onItemClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default FavouritesList;
