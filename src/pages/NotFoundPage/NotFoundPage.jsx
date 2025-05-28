import { useLocation } from "react-router-dom";
import Container from "../../components/Container/Container";
import css from "./NotFoundPage.module.css";
import clsx from "clsx";

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <Container>
      <title>Not Found</title>
      
      <p className={clsx(css.text, css.number)}>404</p>
      <p className={clsx(css.text, css["not-found"])}>
        This is not the web page you are looking for
      </p>

      <p className={clsx(css.text, css["no-match"])}>
        No match for {location.pathname}
      </p>
    </Container>
  );
};

export default NotFoundPage;
