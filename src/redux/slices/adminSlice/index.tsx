import { createSlice } from "@reduxjs/toolkit";
import { AdminState } from "./types";
import { loginFetch, logOutFetch } from "./fetchService";
import { SESSION_KEY_FOR_TOKEN } from "../../../fetchService/constants";

const initialState: AdminState = {
  adminIsLoggedIn: !!sessionStorage.getItem(SESSION_KEY_FOR_TOKEN), // Проверяем наличие токена,
  loading: false,
  error: "",
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Обработчик для loginFetch
    builder
      .addCase(loginFetch.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(loginFetch.fulfilled, (state, action) => {
        sessionStorage.setItem(SESSION_KEY_FOR_TOKEN, `${action.payload.data.token}`);
        state.adminIsLoggedIn = true;
        state.loading = false;
      })
      .addCase(loginFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // Обработчик для logOutFetch
    builder
      .addCase(logOutFetch.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(logOutFetch.fulfilled, (state, action) => {
        if (action.payload.success) {
          sessionStorage.removeItem(SESSION_KEY_FOR_TOKEN);
          state.adminIsLoggedIn = false;
          state.loading = false;
        }
      })
      .addCase(logOutFetch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },

});

export const { } = adminSlice.actions;
export default adminSlice.reducer;
