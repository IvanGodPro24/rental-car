import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header className={css.header}>
      <Container>
        <div className={css["header-container"]}>
          <Logo />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
