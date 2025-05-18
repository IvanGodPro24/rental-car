import { Link } from "react-router-dom";
import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({ to, children, isBtn = false, isCenter = true, onClick }) => {
  return isBtn ? (
    <button
      type="submit"
      className={clsx(css.btn, css["send-btn"], isCenter && css.margin)}
    >
      {children}
    </button>
  ) : (
    <Link
      to={to}
      className={clsx(css.btn, isCenter && css.margin)}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Button;
