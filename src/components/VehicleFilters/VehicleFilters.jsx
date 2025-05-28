import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Button from "../Button/Button";
import css from "./VehicleFilters.module.css";
import * as Yup from "yup";
import clsx from "clsx";
import { selectBrands, selectLoading } from "../../redux/vehicles/selectors";
import { useEffect, useId, useState } from "react";
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
    .optional()
    .when("minMileage", (minMileage, schema) => {
      return minMileage
        ? schema.min(minMileage, "Max mileage must be greater than min mileage")
        : schema;
    }),
});

const VehicleFilters = ({ ref, filters }) => {
  const minMId = useId();
  const maxMId = useId();

  const initialValues = {
    brand: filters.brand || "",
    rentalPrice: filters.rentalPrice || "",
    minMileage: filters.minMileage || "",
    maxMileage: filters.maxMileage || "",
  };

  const [hasSearched, setHasSearched] = useState(false);
  const [filtersChanged, setFiltersChanged] = useState(false);

  const dispatch = useDispatch();

  const brands = useSelector(selectBrands);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    setHasSearched(
      filters.brand ||
        filters.rentalPrice ||
        filters.minMileage ||
        filters.maxMileage
    );
  }, [filters]);

  useEffect(() => {
    if (brands.length === 0) {
      dispatch(getAllBrands());
    }
  }, [brands, dispatch]);

  const onSubmit = (values) => {
    dispatch(resetVehicles());
    dispatch(setCurrentPage(1));
    dispatch(setFilter(values));
    setHasSearched(true);
    setFiltersChanged(false);
    ref.current = false;
  };

  const handleClearFilters = () => {
    const emptyFilters = {
      brand: "",
      rentalPrice: "",
      minMileage: "",
      maxMileage: "",
    };

    dispatch(setFilter(emptyFilters));
    dispatch(resetVehicles());
    dispatch(setCurrentPage(1));

    setHasSearched(false);
    setFiltersChanged(false);
  };

  const handleChange = (values) => {
    setFiltersChanged(
      values.brand !== "" ||
        values.rentalPrice !== "" ||
        values.minMileage !== "" ||
        values.maxMileage !== ""
    );
  };

  if (isLoading) return <Loader />;

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize={true}
    >
      {({ setFieldValue, values }) => {
        return (
          <Form className={css["filter-container"]}>
            <div className={css["internal-filter-container"]}>
              <CustomSelect
                label="Car brand"
                name="brand"
                placeholder="Choose a brand"
                options={brands}
                value={values.brand}
                setFieldValue={(field, value) => {
                  setFieldValue(field, value);
                  handleChange({ ...values, brand: value });
                }}
              />
            </div>

            <div className={css["internal-filter-container"]}>
              <CustomSelect
                label="Price/ 1 hour"
                name="rentalPrice"
                placeholder="Choose a price"
                options={[30, 40, 50, 60, 70, 80]}
                value={values.rentalPrice}
                setFieldValue={(field, value) => {
                  setFieldValue(field, value);
                  handleChange({
                    ...values,
                    rentalPrice: value,
                  });
                }}
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
                  onChange={(e) => {
                    setFieldValue("minMileage", e.target.value);
                    handleChange({
                      ...values,
                      minMileage: e.target.value,
                    });
                  }}
                />
                <Field
                  type="number"
                  name="maxMileage"
                  id={maxMId}
                  placeholder="To"
                  className={css.price}
                  onChange={(e) => {
                    setFieldValue("maxMileage", e.target.value);
                    handleChange({
                      ...values,
                      maxMileage: e.target.value,
                    });
                  }}
                />
              </div>

              <ErrorMessage
                name="minMileage"
                component="div"
                className={clsx("error-block", css.absolute)}
              />

              <ErrorMessage
                name="maxMileage"
                component="div"
                className={clsx("error-block", css.absolute)}
              />
            </div>

            <Button isBtn={true} isCenter={false} disabled={!filtersChanged}>
              Search
            </Button>

            {hasSearched && (
              <Button
                isBtn={true}
                isCenter={false}
                type="button"
                onClick={() => handleClearFilters()}
              >
                Clear
              </Button>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default VehicleFilters;
