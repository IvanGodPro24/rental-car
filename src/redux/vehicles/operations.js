import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getAllVehicles = createAsyncThunk(
  "vehicles/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/cars");

      return response.data.cars;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
