import css from "./BackLink.module.css";
import icons from "../../assets/icons.svg";
import { Link } from "react-router-dom";

const BackLink = ({ to }) => {
  return (
    <Link to={to} className={css["back-link"]}>
      <svg className={css["back-icon"]}>
        <use href={`${icons}#icon-arrow`}></use>
      </svg>
    </Link>
  );
};

export default BackLink;
