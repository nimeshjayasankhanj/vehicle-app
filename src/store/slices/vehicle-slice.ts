import { createSlice } from "@reduxjs/toolkit";
import { Bid, VehicleObject, VehicleSlice } from "src/DTO/store";
import { getSingleVehicle, vehicleService } from "src/services/vehicle-service";

const initialState: VehicleSlice = {
  data: [],
  isSuccess: false,
  isLoading: false,
  isError: false,
  bids: [],
  vehicle: VehicleObject,
};

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    markAsBid: (state, action) => {
      const data = action.payload;
      state.bids = state.bids.filter((value: Bid) => value.id !== data.id);
      state.bids.push(data);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(vehicleService.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(vehicleService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(vehicleService.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(getSingleVehicle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleVehicle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.vehicle = action.payload;
      })
      .addCase(getSingleVehicle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});
export const { markAsBid } = vehicleSlice.actions;

export default vehicleSlice.reducer;
