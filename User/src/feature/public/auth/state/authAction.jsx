import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMe, loginUser, registerUser } from "../api/auth";

export const registerEmployee = createAsyncThunk(
  "auth/register",
  async (credentials, thunkApi) => {
    try {
      const res = await registerUser(credentials);

      return res.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Registration failed",
      );
    }
  },
);

export const loginEmployee = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      const res = await loginUser(credentials);

      return res.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Login failed",
      );
    }
  },
);
export const currentLoggedEmployee = createAsyncThunk(
  "auth/current-user",
  async (_, thunkApi) => {
    try {
      const res = await getMe();
 
      return res.data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Failed to get current user",
      );
    }
  },
);
