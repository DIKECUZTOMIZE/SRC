import { createSlice } from "@reduxjs/toolkit";
import { currentLoggedEmployee, loginEmployee } from "./authAction";

const initialState = {
  employee: null,
  isLoading: true,
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
    },

    clearError: (state) => {
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder

      // LOGIN

      .addCase(loginEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(loginEmployee.fulfilled, (state, action) => {
        console.log("LOGIN SUCCESS:", action.payload);

        state.isLoading = false;

        state.employee = action.payload;
      })

      .addCase(loginEmployee.rejected, (state, action) => {
        state.isLoading = false;

        state.error = action.payload || "Login Failed";
      })

      // CURRENT USER

      .addCase(currentLoggedEmployee.pending, (state) => {
        state.isLoading = true;
      })

      .addCase(currentLoggedEmployee.fulfilled, (state, action) => {
        state.isLoading = false;

        state.employee = action.payload;
      })

      .addCase(currentLoggedEmployee.rejected, (state) => {
        state.isLoading = false;

        state.employee = null;
      });
  },
});

export const { addEmployee, removeEmployee, clearError } = authSlice.actions;

export default authSlice.reducer;
