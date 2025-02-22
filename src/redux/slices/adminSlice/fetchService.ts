import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequest } from "./types";
import api from "../../../fetchService";
import { setNotification } from "../notificatinSlice";
import { notificationEnum } from "../notificatinSlice/types";

export const loginFetch = createAsyncThunk(
  "admin/login",
  async (loginData: LoginRequest, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post(`/admin/login`, loginData);
      return response.data;
    } catch (error: any) {
      dispatch(setNotification({ messageNotification: error.response.data.error[0], statusNotification: notificationEnum.ERROR }))
      return rejectWithValue(error.response.data.error[0] || "Ошибка при входе");
    }
  }
);

export const logOutFetch = createAsyncThunk(
  "admin/logout",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post(`/admin/logout`);
      return response.data;
    } catch (error: any) {
      dispatch(setNotification({ messageNotification: error.response.data.error[0], statusNotification: notificationEnum.ERROR }))
      return rejectWithValue(error.response.data.message);
    }
  }
);