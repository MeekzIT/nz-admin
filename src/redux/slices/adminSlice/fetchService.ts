import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginRequest } from "./types";
import api from "../../../fetchService";

export const loginFetch = createAsyncThunk(
    "admin/login",
    async (loginData: LoginRequest, { rejectWithValue }) => {
      try {
        const response = await api.post(`/admin/login`, loginData);
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data.error[0] || "Ошибка при входе");
      }
    }
  );

export const logOutFetch = createAsyncThunk(
    "admin/logout",
    async (_, { rejectWithValue }) => {
      try {
        const response = await api.post(`/admin/logout`);
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );