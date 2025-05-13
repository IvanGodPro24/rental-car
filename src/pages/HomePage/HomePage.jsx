import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={css.section}>
      <Container>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.paragraph}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Link to='/catalog' className={css.view}>View Catalog</Link>
      </Container>
    </section>
  );
};

export default HomePage;
