import { createSlice } from "@reduxjs/toolkit";
import { getAllVehicles } from "./operations";

const vehicleSlice = createSlice({
  name: "vehicle",

  initialState: {
    items: [],
    favourites: [],
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
      .addCase(getAllVehicles.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllVehicles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addFavourite, removeFavourite } = vehicleSlice.actions;

export default vehicleSlice.reducer;
