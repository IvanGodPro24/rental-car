import clsx from "clsx";
import css from "./Navigation.module.css";

const BuildLinkClass = ({ isActive }) => {
  return clsx(css["header-link"], isActive && css.active);
};

export default BuildLinkClass;
