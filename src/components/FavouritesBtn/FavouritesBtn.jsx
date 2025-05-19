import css from "./FavouritesBtn.module.css";
import icons from "../../assets/icons.svg";

const FavouritesBtn = ({ onClick }) => {
  return (
    <>
      <button type="button" className={css["favourite-btn"]}>
        <svg className={css["favourite-icon"]} onClick={onClick}>
          <use href={`${icons}#icon-heart`}></use>
        </svg>
      </button>
    </>
  );
};

export default FavouritesBtn;
