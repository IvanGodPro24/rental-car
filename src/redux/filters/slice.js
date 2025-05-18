import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",

  initialState: {
    brand: "",
    rentalPrice: null,
    minMileage: null,
    maxMileage: null,
  },

  reducers: {
    setFilter(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
