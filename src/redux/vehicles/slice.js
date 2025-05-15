import { createSlice } from "@reduxjs/toolkit";
import { getAllVehicles } from "./operations";

const vehicleSlice = createSlice({
  name: "vehicle",

  initialState: {
    items: [],
    loading: false,
    error: null,
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

export default vehicleSlice.reducer;
