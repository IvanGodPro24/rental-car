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
    totalPages: null,
    currentPage: 1,
    loadedPages: [],
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

    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },

    resetVehicles(state) {
      state.items = [];
      state.currentPage = 1;
      state.loadedPages = [];
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllVehicles.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        const page = action.meta.arg.page || 1;

        if (!state.loadedPages.includes(page)) {
          state.loadedPages.push(page);

          page === 1
            ? (state.items = action.payload.cars)
            : (state.items = [...state.items, ...action.payload.cars]);
        }

        state.totalPages = action.payload.totalPages;
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

export const { addFavourite, removeFavourite, setCurrentPage, resetVehicles } =
  vehicleSlice.actions;

export default vehicleSlice.reducer;
