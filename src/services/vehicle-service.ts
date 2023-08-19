import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Vehicle } from "src/DTO/store";

export const vehicleService = createAsyncThunk(
  "vehicle-lists",
  async (search: string, thunkApi) => {
    try {
      if (search === "") {
        const data = await axios.get(`http://157.245.61.32:7979/vehicles`);
        return data.data as Vehicle[];
      } else {
        const data = await axios.get(
          `http://157.245.61.32:7979/vehicles?details.brand=${search}`
        );
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
    try {
      const data = await axios.get(`http://157.245.61.32:7979/vehicles/${id}`);
      return data.data as Vehicle;
    } catch (error) {
      throw error;
    }
  }
);
