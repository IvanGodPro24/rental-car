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

const VehicleFilters = () => {
  const brandId = useId();
  const priceId = useId();
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
    dispatch(getAllBrands());
  }, [dispatch]);

  const onSubmit = (values) => {
    dispatch(resetVehicles());
    dispatch(setCurrentPage(1));
    dispatch(setFilter(values));
  };

  if (isLoading) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className={css["filter-container"]}>
        <div className={css["internal-filter-container"]}>
          <label htmlFor={brandId} className={css.label}>
            Car brand
          </label>

          <Field as="select" name="brand" id={brandId} className="">
            <option value="">Select a brand</option>
            {brands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </Field>

          <ErrorMessage name="brand" component="div" className={css.error} />

          {/* <div className={css["custom-select"]}></div> */}
        </div>

        <div className={css["internal-filter-container"]}>
          <label htmlFor={priceId} className={css.label}>
            Price/ 1 hour
          </label>
          <Field
            as="select"
            name="rentalPrice"
            id={priceId}
            className={css.select}
          >
            <option value="">Select a price</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
            <option value="60">60</option>
            <option value="70">70</option>
            <option value="80">80</option>
          </Field>

          <ErrorMessage
            name="rentalPrice"
            component="div"
            className={css.error}
          />
        </div>

        <div className={css["internal-filter-container"]}>
          <label htmlFor={minMId} className={css.label}>
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
            <ErrorMessage
              name="minMileage"
              component="div"
              className={css.error}
            />
            <Field
              type="number"
              name="maxMileage"
              id={maxMId}
              placeholder="To"
              className={css.price}
            />
            <ErrorMessage
              name="maxMileage"
              component="div"
              className={css.error}
            />
          </div>
        </div>

        <Button isBtn={true} isCenter={false}>
          Search
        </Button>
      </Form>
    </Formik>
  );
};

export default VehicleFilters;
