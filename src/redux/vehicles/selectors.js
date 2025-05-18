export const selectAllVehicles = (state) => state.vehicle.items;

export const selectFavourites = (state) => state.vehicle.favourites;

export const selectVehicle = (state) => state.vehicle.selectedVehicle;

export const selectTotalPages = (state) => state.vehicle.totalPages;

export const selectCurrentPage = (state) => state.vehicle.currentPage;

export const selectLoadedPages = (state) => state.vehicle.loadedPages;

export const selectBrands = (state) => state.vehicle.brands;

export const selectLoading = (state) => state.vehicle.loading;

export const selectError = (state) => state.vehicle.error;
