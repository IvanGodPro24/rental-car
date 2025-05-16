import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import VehicleFilters from "../../components/VehicleFilters/VehicleFilters";
import VehicleList from "../../components/VehicleList/VehicleList";
import { getAllVehicles } from "../../redux/vehicles/operations";
import { selectError, selectLoading } from "../../redux/vehicles/selectors";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllVehicles());
  }, [dispatch]);

  return (
    <section>
      <Container>
        {/* <VehicleFilters /> */}
        {isLoading && <Loader />}
        {error && <p className="error">{error}</p>}
        <VehicleList />
        <LoadMoreButton />
      </Container>
    </section>
  );
};

export default CatalogPage;
