import { createSlice } from "@reduxjs/toolkit";
import { getAllVehicles, getVehicleById } from "./operations";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const vehicleSlice = createSlice({
  name: "vehicle",

  initialState: {
    items: [],
    favourites: [],
    selectedVehicle: null,
    loading: false,
    error: null,
  },

  reducers: {
    addFavourite(state, action) {
      if (!state.favourites.includes(action.payload)) {
        state.favourites.push(action.payload);
      }
    },

    removeFavourite(state, action) {
      state.favourites = state.favourites.filter((id) => id !== action.payload);
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })

      .addCase(getVehicleById.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.selectedVehicle = action.payload;
      })

      .addMatcher((action) => action.type.endsWith("rejected"), handleRejected)
      .addMatcher((action) => action.type.endsWith("pending"), handlePending);
  },
});

export const { addFavourite, removeFavourite } = vehicleSlice.actions;

export default vehicleSlice.reducer;
