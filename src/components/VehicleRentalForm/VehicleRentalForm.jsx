import clsx from "clsx";
import css from "./VehicleRentalForm.module.css";
import Button from "../Button/Button";
import { toast } from "sonner";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useId, useState } from "react";
import icons from "../../assets/icons.svg";
import { getYear, getMonth } from "date-fns";
import { registerLocale } from "react-datepicker";
import enUS from "date-fns/locale/en-US";
import { months, shortDays } from "../../utils/utils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("custom-en", {
  ...enUS,
  localize: {
    ...enUS.localize,
    day: (n) => shortDays[n],
  },
});

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email address"),
  date: Yup.date().required("Date is required"),
  comment: Yup.string()
    .optional()
    .max(500, "Comment cannot exceed 500 characters"),
});

const VehicleRentalForm = () => {
  const nameId = useId();
  const emailId = useId();
  const dateId = useId();
  const commentId = useId();

  const [selectedDate, setSelectedDate] = useState(null);

  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const onSubmit = ({ name }, actions) => {
    toast.success(
      `Congratulations ${name}, you have booked a car for ${selectedDate.toLocaleDateString()}`
    );

    setSelectedDate(null);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue }) => (
        <Form className={css.form}>
          <div>
            <p className={css["main-text"]}>Book your car now</p>
            <p className={css["extra-text"]}>
              Stay connected! We are always ready to help you.
            </p>
          </div>
          <div className={css["input-container"]}>
            <Field
              type="text"
              name="name"
              id={nameId}
              placeholder="Name*"
              className={css.input}
            />
            <ErrorMessage name="name" component="div" className="error-block" />
            <Field
              type="email"
              name="email"
              id={emailId}
              placeholder="Email*"
              className={css.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className="error-block"
            />

            <DatePicker
              selected={selectedDate}
              minDate={new Date()}
              locale="custom-en"
              onChange={(date) => {
                setSelectedDate(date);
                setFieldValue("date", date);
              }}
              id={dateId}
              dateFormat="dd.MM.yyyy"
              placeholderText="Booking date"
              renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
              }) => (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <button
                    type="button"
                    onClick={decreaseMonth}
                    disabled={prevMonthButtonDisabled}
                  >
                    <svg className={clsx(css.arrow, css.prev)}>
                      <use href={`${icons}#icon-arrow`}></use>
                    </svg>
                  </button>

                  <span className={css.span}>
                    {months[getMonth(date)]} {getYear(date)}
                  </span>

                  <button
                    type="button"
                    onClick={increaseMonth}
                    disabled={nextMonthButtonDisabled}
                  >
                    <svg className={clsx(css.arrow, css.next)}>
                      <use href={`${icons}#icon-arrow`}></use>
                    </svg>
                  </button>
                </div>
              )}
              calendarClassName={css.calendar}
              className={css.input}
            />
            <ErrorMessage name="date" component="div" className="error-block" />

            <Field
              as="textarea"
              name="comment"
              id={commentId}
              placeholder="Comment"
              className={clsx(css.input, css.textarea)}
            />
            <ErrorMessage
              name="comment"
              component="div"
              className="error-block"
            />
          </div>
          <Button isBtn={true}>Send</Button>
        </Form>
      )}
    </Formik>
  );
};

export default VehicleRentalForm;
