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

const CatalogPage = () => {
  const dispatch = useDispatch();
  const toastShownRef = useRef(false);

  const vehicles = useSelector(selectAllVehicles);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(selectCurrentPage);
  const loadedPages = useSelector(selectLoadedPages);

  useEffect(() => {
    if (!loadedPages.includes(currentPage)) {
      dispatch(getAllVehicles({ page: currentPage }));
    }
  }, [dispatch, currentPage, loadedPages]);

  const loadMoreVehicles = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      dispatch(setCurrentPage(nextPage));

      if (nextPage === totalPages && !toastShownRef.current) {
        toast.success("It's over!");
        toastShownRef.current = true;
      }
    }
  };

  return (
    <section>
      <Container>
        {/* <VehicleFilters /> */}
        {isLoading && <Loader />}
        {error && <p className="error">{error}</p>}
        <VehicleList vehicles={vehicles} />
        {currentPage < totalPages && (
          <LoadMoreButton onClick={loadMoreVehicles} />
        )}
      </Container>
    </section>
  );
};

export default CatalogPage;
