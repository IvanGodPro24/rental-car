import VehicleFeatureList from "../VehicleFeatureList/VehicleFeatureList";
import VehicleInfo from "../VehicleInfo/VehicleInfo";
import VehicleSpecificationList from "../VehicleSpecificationList/VehicleSpecificationList";
import css from "./VehicleDescription.module.css";

const VehicleDescription = ({ vehicle }) => {
  return (
    <>
      <div className={css.info}>
        <VehicleInfo
          brand={vehicle.brand}
          model={vehicle.model}
          year={vehicle.year}
          id={vehicle.id}
          address={vehicle.address}
          mileage={vehicle.mileage}
          rentalPrice={vehicle.rentalPrice}
          description={vehicle.description}
        />
      </div>

      <div className={css.stats}>
        <div>
          <h3 className={css.title}>Rental Conditions: </h3>
          <VehicleFeatureList conditions={vehicle.rentalConditions} />
        </div>

        <div>
          <h3 className={css.title}>Car Specifications:</h3>
          <VehicleSpecificationList
            year={vehicle.year}
            type={vehicle.type}
            engineSize={vehicle.engineSize}
            fuelConsumption={vehicle.fuelConsumption}
          />
        </div>

        <div>
          <h3 className={css.title}>Accessories and functionalities:</h3>
          <VehicleFeatureList
            accessories={vehicle.accessories}
            functionalities={vehicle.functionalities}
          />
        </div>
      </div>
    </>
  );
};

export default VehicleDescription;
