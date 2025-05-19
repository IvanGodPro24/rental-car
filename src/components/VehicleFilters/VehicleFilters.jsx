import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../Button/Button";
import css from "./VehicleFilters.module.css";
import * as Yup from "yup";
import { selectBrands, selectLoading } from "../../redux/vehicles/selectors";
import { useEffect, useId } from "react";
import { getAllBrands } from "../../redux/vehicles/operations";
import Loader from "../Loader/Loader";
import { setFilter } from "../../redux/filters/slice";
import { resetVehicles, setCurrentPage } from "../../redux/vehicles/slice";
import CustomSelect from "../CustomSelect/CustomSelect";

const validationSchema = Yup.object().shape({
  brand: Yup.string().optional(),
  rentalPrice: Yup.number()
    .positive("Price must be a positive number")
    .integer("Price must be an integer")
    .optional(),
  minMileage: Yup.number()
    .positive("Mileage must be a positive number")
    .integer("Mileage must be an integer")
    .optional(),
  maxMileage: Yup.number()
    .positive("Mileage must be a positive number")
    .integer("Mileage must be an integer")
    .optional(),
});

const VehicleFilters = ({ ref }) => {
  const minMId = useId();
  const maxMId = useId();

  const initialValues = {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  };

  const dispatch = useDispatch();

  const brands = useSelector(selectBrands);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    if (brands.length === 0) {
      dispatch(getAllBrands());
    }
  }, [brands, dispatch]);

  const onSubmit = (values) => {
    dispatch(resetVehicles());
    dispatch(setCurrentPage(1));
    dispatch(setFilter(values));
    ref.current = false;
  };

  if (isLoading) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
        <Form className={css["filter-container"]}>
          <div className={css["internal-filter-container"]}>
            <CustomSelect
              label="Car brand"
              name="brand"
              placeholder="Choose a brand"
              options={brands}
              setFieldValue={setFieldValue}
            />
          </div>

          <div className={css["internal-filter-container"]}>
            <CustomSelect
              label="Price/ 1 hour"
              name="rentalPrice"
              placeholder="Choose a price"
              options={[30, 40, 50, 60, 70, 80]}
              setFieldValue={setFieldValue}
            />
          </div>

          <div className={css["internal-filter-container"]}>
            <label htmlFor={minMId} className="label">
              Сar mileage / km
            </label>
            <div className={css["from-to-container"]}>
              <Field
                type="number"
                name="minMileage"
                id={minMId}
                placeholder="From"
                className={css.price}
              />
              <Field
                type="number"
                name="maxMileage"
                id={maxMId}
                placeholder="To"
                className={css.price}
              />
            </div>

            <ErrorMessage
              name="minMileage"
              component="div"
              className="error-block"
            />

            <ErrorMessage
              name="maxMileage"
              component="div"
              className="error-block"
            />
          </div>

          <Button isBtn={true} isCenter={false}>
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default VehicleFilters;
