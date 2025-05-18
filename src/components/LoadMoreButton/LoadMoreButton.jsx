import { useSelector } from "react-redux";
import css from "./LoadMoreButton.module.css";
import { selectLoading } from "../../redux/vehicles/selectors";
import Loader from "../Loader/Loader";

const LoadMoreButton = ({ onClick }) => {
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {isLoading && <Loader />}

      <button type="button" className={css["load-more"]} onClick={onClick}>
        Load More
      </button>
    </>
  );
};

export default LoadMoreButton;
