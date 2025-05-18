import { configureStore } from "@reduxjs/toolkit";
import vehicleReducer from "./vehicles/slice";
import filterReducer from "./filters/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "vehicle",
  storage,
  whitelist: ["favourites"],
};

const persistedReducer = persistReducer(persistConfig, vehicleReducer);

export const store = configureStore({
  reducer: {
    vehicle: persistedReducer,
    filter: filterReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
