import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Vehicle } from "src/DTO/store";

interface VehicleServiceParams {
  search: string;
  selectedPage: number;
}

export const vehicleService = createAsyncThunk(
  "vehicle-lists",
  async (params: VehicleServiceParams, thunkApi) => {
    const url = process.env.REACT_APP_VEHICLE_URL as string;
    const { search, selectedPage } = params;
    try {
      if (search === "") {
        const data = await axios.get(`${url}?_page=${selectedPage}&_limit=5`);
        return data.data as Vehicle[];
      } else {
        const data = await axios.get(`${url}?details.brand=${search}`);
        return data.data as Vehicle[];
      }
    } catch (error) {
      throw error;
    }
  }
);

export const getSingleVehicle = createAsyncThunk(
  "vehicle",
  async (id: any, thunkApi) => {
    const url = process.env.REACT_APP_VEHICLE_URL as string;
    try {
      const data = await axios.get(`${url}/${id}`);
      return data.data as Vehicle;
    } catch (error) {
      throw error;
    }
  }
);
