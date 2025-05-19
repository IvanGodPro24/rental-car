import { useSelector } from "react-redux";
import { selectFavourites } from "../../redux/vehicles/selectors";
import css from "./FavouriteModal.module.css";
import FavouritesList from "../FavouritesList/FavouritesList";

const FavouriteModal = ({ onClick, isModalOpen, ref }) => {
  const favourites = useSelector(selectFavourites);

  return (
    <div className={`${css.modal} ${isModalOpen ? css.open : ""}`}>
      <div className={css["modal-content"]} ref={ref}>
        <span className={css.close} onClick={onClick}>
          &times;
        </span>
        <h2 className={css.title}>Favourites</h2>
        <FavouritesList favourites={favourites} onItemClick={onClick} />
      </div>
    </div>
  );
};

export default FavouriteModal;
