import { configureStore } from "@reduxjs/toolkit";
import vehicleSlice from "src/store/slices/vehicle-slice";

export const store = configureStore({
  reducer: {
    vehicles: vehicleSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootStore = ReturnType<typeof store.getState>;
