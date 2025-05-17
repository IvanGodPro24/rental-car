import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVehicleById } from "../../redux/vehicles/operations";
import { selectVehicle } from "../../redux/vehicles/selectors";
import VehicleImage from "../../components/VehicleImage/VehicleImage";
import VehicleDescription from "../../components/VehicleDescription/VehicleDescription";
import VehicleRentalForm from "../../components/VehicleRentalForm/VehicleRentalForm";
import Loader from "../../components/Loader/Loader";
import css from "./VehicleDetailPage.module.css";
import Container from "../../components/Container/Container";

const VehicleDetailPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const vehicle = useSelector(selectVehicle);

  console.log(vehicle);

  useEffect(() => {
    dispatch(getVehicleById(id));
  }, [dispatch, id]);

  if (!vehicle) return <Loader />;

  return (
    <section className={css["details-container"]}>
      <Container>
        <div className={css["card-form-contaner"]}>
          <VehicleImage
            img={vehicle?.img}
            brand={vehicle?.brand}
            model={vehicle?.model}
          />
          <VehicleRentalForm />
        </div>
        <div>
          <VehicleDescription />
        </div>
      </Container>
    </section>
  );
};

export default VehicleDetailPage;
