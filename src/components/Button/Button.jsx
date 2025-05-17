import { Link } from "react-router-dom";
import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({ to, children, isBtn = false }) => {
  return isBtn ? (
    <button type="submit" className={clsx(css.btn, css["send-btn"])}>
      {children}
    </button>
  ) : (
    <Link to={to} className={css.btn}>
      {children}
    </Link>
  );
};

export default Button;
