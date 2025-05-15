import { configureStore } from "@reduxjs/toolkit";
import vehicleSlice from "./vehicles/slice";

export const store = configureStore({
  reducer: {
    vehicle: vehicleSlice,
  },
});
