import css from "./VehicleFilters.module.css";

const VehicleFilters = () => {
  return (
    <div className={css["filter-container"]}>
      <div className={css["internal-filter-container"]}>
        <select
          name="brand"
          id="select-brand"
          className="visually-hidden"
        >
          <option value="Aston Martin">Aston Martin</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Bentley">Bentley</option>
          <option value="Buick">Buick</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Chrysler">Chrysler</option>
          <option value="GMC">GMC</option>
          <option value="HUMMER">HUMMER</option>
        </select>

        <label htmlFor="select-brand" className={css.label}>
          Car brand
        </label>

        <div className={css["custom-select"]}></div>
      </div>

      <div className={css["internal-filter-container"]}>
        <label htmlFor="select-price" className={css.label}>
          Price/ 1 hour
        </label>
        <select name="price" id="select-price" className={css.select}>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
        </select>
      </div>

      <div className={css["internal-filter-container"]}>
        <label htmlFor="from" className={css.label}>
          Сar mileage / km
        </label>
        <div className={css["from-to-container"]}>
          <input
            type="number"
            name="from"
            id="from"
            placeholder="From"
            min="0"
          />
          <input type="number" name="to" id="to" placeholder="To" min="0" />
        </div>
      </div>

      <button type="button" id="search-btn">
        Search
      </button>
    </div>
  );
};

export default VehicleFilters;
