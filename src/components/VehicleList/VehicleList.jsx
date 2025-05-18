import VehicleCard from "../VehicleCard/VehicleCard";
import css from "./VehicleList.module.css";

const VehicleList = ({ vehicles }) => {
  return (
    <ul className={css.list}>
      {vehicles.map(
        ({
          id,
          img,
          brand,
          model,
          year,
          rentalPrice,
          address,
          rentalCompany,
          type,
          mileage,
        }) => (
          <li key={id} className={css.item}>
            <VehicleCard
              id={id}
              img={img}
              brand={brand}
              model={model}
              year={year}
              rentalPrice={rentalPrice}
              address={address}
              rentalCompany={rentalCompany}
              type={type}
              mileage={mileage}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default VehicleList;
