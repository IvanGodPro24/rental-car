export const selectAllVehicles = (state) => state.vehicle.items;

export const selectFavourites = (state) => state.vehicle.favourites;

export const selectVehicle = (state) => state.vehicle.selectedVehicle;

export const selectLoading = (state) => state.vehicle.loading;

export const selectError = (state) => state.vehicle.error;
