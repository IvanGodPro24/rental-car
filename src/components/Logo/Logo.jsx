import { Link } from "react-router-dom";
import css from "./Logo.module.css";
import icons from "../../assets/icons.svg";

const Logo = () => {
  return (
    <Link to="/" className={css.logo}>
      <svg width="104" height="16">
        <use href={`${icons}#icon-logo`}></use>
      </svg>
    </Link>
  );
};

export default Logo;
