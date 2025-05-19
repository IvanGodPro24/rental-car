import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getVehicleById } from "../../redux/vehicles/operations";
import { selectLoading, selectVehicle } from "../../redux/vehicles/selectors";
import VehicleImage from "../../components/VehicleImage/VehicleImage";
import VehicleDescription from "../../components/VehicleDescription/VehicleDescription";
import VehicleRentalForm from "../../components/VehicleRentalForm/VehicleRentalForm";
import Loader from "../../components/Loader/Loader";
import css from "./VehicleDetailPage.module.css";
import Container from "../../components/Container/Container";
import BackLink from "../../components/BackLink/BackLink";
import ImageModal from "../../components/ImageModal/ImageModal";

const VehicleDetailPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const vehicle = useSelector(selectVehicle);

  const isLoading = useSelector(selectLoading);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);

  const closeModal = () => setModalOpen(false);

  const location = useLocation();
  const backLink = location.state ?? "/catalog";

  useEffect(() => {
    dispatch(getVehicleById(id));
  }, [dispatch, id]);

  if (isLoading || !vehicle) return <Loader />;

  return (
    <section className={css["details-section"]}>
      <Container>
        <div className={css["details-container"]}>
          <div className={css["card-form-contaner"]}>
            <BackLink to={backLink} />
            <VehicleImage
              img={vehicle.img}
              brand={vehicle.brand}
              model={vehicle.model}
              onClick={openModal}
            />
            <VehicleRentalForm />
          </div>
          <div>
            <VehicleDescription vehicle={vehicle} />
          </div>
        </div>

        <ImageModal
          isModalOpen={isModalOpen}
          onClose={closeModal}
          img={vehicle.img}
          brand={vehicle.brand}
          model={vehicle.model}
        />
      </Container>
    </section>
  );
};

export default VehicleDetailPage;
