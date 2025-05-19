import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/Container/Container";
import LoadMoreButton from "../../components/LoadMoreButton/LoadMoreButton";
import VehicleFilters from "../../components/VehicleFilters/VehicleFilters";
import VehicleList from "../../components/VehicleList/VehicleList";
import { getAllVehicles } from "../../redux/vehicles/operations";
import {
  selectAllVehicles,
  selectCurrentPage,
  selectError,
  selectLoadedPages,
  selectLoading,
  selectTotalPages,
} from "../../redux/vehicles/selectors";
import Loader from "../../components/Loader/Loader";
import { toast } from "sonner";
import { setCurrentPage } from "../../redux/vehicles/slice";
import { selectFilters } from "../../redux/filters/selectors";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const toastShownRef = useRef(false);

  const vehicles = useSelector(selectAllVehicles);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const loadedPages = useSelector(selectLoadedPages);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    const savedScrollY = sessionStorage.getItem("catalogScrollY");

    if (savedScrollY) {
      window.scrollTo(0, parseInt(savedScrollY));
      sessionStorage.removeItem("catalogScrollY");
    }

    const { brand, rentalPrice, minMileage, maxMileage } = filters;

    if (!loadedPages.includes(currentPage)) {
      dispatch(
        getAllVehicles({
          page: currentPage,
          limit: 12,
          brand,
          rentalPrice,
          minMileage,
          maxMileage,
        })
      );
    }
  }, [dispatch, currentPage, filters, loadedPages]);

  const loadMoreVehicles = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      dispatch(setCurrentPage(nextPage));

      if (nextPage === totalPages && !toastShownRef.current) {
        toast.success("Vehicles are over!");
        toastShownRef.current = true;
      }
    }
  };

  return (
    <section>
      <Container>
        <VehicleFilters ref={toastShownRef} />
        {isLoading && <Loader />}
        {error && <p className="error center">{error}</p>}

        {!isLoading && !error && vehicles.length === 0 && (
          <p className="center">No vehicles found matching your criteria.</p>
        )}

        <VehicleList vehicles={vehicles} />
        {currentPage < totalPages && vehicles.length > 0 && (
          <LoadMoreButton onClick={loadMoreVehicles} />
        )}
      </Container>
    </section>
  );
};

export default CatalogPage;
