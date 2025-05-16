import Container from "../../components/Container/Container";
import css from "./HomePage.module.css";
import Button from "../../components/Button/Button";

const HomePage = () => {
  return (
    <section className={css.section}>
      <Container>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.paragraph}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Button to="/catalog">View Catalog</Button>
      </Container>
    </section>
  );
};

export default HomePage;
