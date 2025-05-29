import { Link } from "react-router-dom";
import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({
  to,
  children,
  isBtn = false,
  isCenter = true,
  onClick,
  unstyled = false,
  disabled,
  type = "submit",
}) => {
  return isBtn ? (
    <button
      type={type}
      className={clsx(
        css.btn,
        css["send-btn"],
        isCenter && css.margin,
        disabled && css.disabled
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  ) : (
    <Link
      to={to}
      className={clsx(
        !unstyled && css.btn,
        !unstyled && isCenter && css.margin,
        to === "/catalog" && css.max
      )}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default Button;
