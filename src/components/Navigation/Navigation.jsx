import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import BuildLinkClass from "./BuildLinkClass";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={BuildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={BuildLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
};

export default Navigation;
