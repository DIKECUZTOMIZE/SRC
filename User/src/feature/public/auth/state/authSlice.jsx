import { createSlice } from "@reduxjs/toolkit";
import {
  currentLoggedEmployee,
  loginEmployee,
  registerEmployee,
} from "./authAction";

const initialState = {
  employee: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  reducers: {
    addEmployee: (state, action) => {
      state.employee = action.payload;
    },

    removeEmployee: (state) => {
      state.employee = null;
      state.error = null;
      state.isLoading = false;
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // ================= LOGIN =================

      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(loginEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employee = action.payload;
      })

      .addCase(loginEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })

      // ================= REGISTER =================

      .addCase(registerEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(registerEmployee.fulfilled, (state, action) => {
        state.isLoading = false;
        state.employee = action.payload;
      })

      .addCase(registerEmployee.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      })
      .addCase(currentLoggedEmployee.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(currentLoggedEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
            

        state.isLoading = false;
      })
      .addCase(currentLoggedEmployee.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { addEmployee, removeEmployee, clearError } = authSlice.actions;

export default authSlice.reducer;
