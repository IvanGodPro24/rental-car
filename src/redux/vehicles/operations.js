import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const getAllVehicles = createAsyncThunk(
  "vehicles/getAll",
  async ({ page = 1, limit = 12 }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/cars?page=${page}&limit=${limit}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getVehicleById = createAsyncThunk(
  "vehicles/getById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/cars/${id}`);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
