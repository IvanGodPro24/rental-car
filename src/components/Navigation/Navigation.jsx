import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import BuildLinkClass from "./BuildLinkClass";
import FavouritesBtn from "../FavouritesBtn/FavouritesBtn";
import FavouriteModal from "../FavouriteModal/FavouriteModal";

const Navigation = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    isModalOpen
      ? document.addEventListener("mousedown", handleClickOutside)
      : document.removeEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <nav className={css.nav}>
      <NavLink to="/" className={BuildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={BuildLinkClass}>
        Catalog
      </NavLink>

      <FavouritesBtn onClick={toggleModal} />

      <FavouriteModal
        onClick={toggleModal}
        isModalOpen={isModalOpen}
        ref={modalRef}
      />
    </nav>
  );
};

export default Navigation;
