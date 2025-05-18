import { useState } from "react";
import { Field, ErrorMessage } from "formik";
import css from "./CustomSelect.module.css";
import icons from "../../assets/icons.svg";
import clsx from "clsx";

const CustomSelect = ({ options, label, name, placeholder, setFieldValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionClick = (option) => {
    setSelectedOption(name === "rentalPrice" ? `To $${option}` : option);
    setFieldValue(name, option);
    setIsOpen(false);
  };

  return (
    <div className={css["custom-select-container"]}>
      <label className="label">{label}</label>

      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={css["custom-select"]}
      >
        {selectedOption || placeholder}
        <svg className={clsx("icon", css.arrow, { [css.rotate]: isOpen })}>
          <use href={`${icons}#icon-arrow`}></use>
        </svg>
      </div>

      {isOpen && (
        <div className={css["options"]}>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={css["option"]}
            >
              {option}
            </div>
          ))}
        </div>
      )}

      <Field
        type="hidden"
        className="visually-hidden"
        name={name}
        value={selectedOption}
      />

      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default CustomSelect;
