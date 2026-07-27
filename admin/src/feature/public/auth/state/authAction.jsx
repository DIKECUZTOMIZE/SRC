import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMe, loginUser } from "../api/auth";

export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const res = await loginUser(credentials);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Login failed",
      );
    }
  },
);

export const currentLoggedEmployee = createAsyncThunk(
  "auth/me",
  async (_, thunkApi) => {
    try {
      const res = await getMe();

      console.log("DASHBOARD RESPONSE:", res.data.data);

      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "User not found",
      );
    }
  },
);
