import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../fetchService";
import { AboutDataType } from "./types";
import { setNotification } from "../notificatinSlice";
import { SUCCESS_TEXT_AFTER_CHANG_DATA } from "../../../constants";
import { notificationEnum } from "../notificatinSlice/types";

export const fetchGetInfoAboutUs = createAsyncThunk(
  "get/about/page",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/about-us/1");

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

export const fetchSaveInfoAboutUs = createAsyncThunk(
  "change/about/page",
  async (dataAboutUs: AboutDataType, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.put("/about-us/edit/1", dataAboutUs);
      dispatch(setNotification({ messageNotification: SUCCESS_TEXT_AFTER_CHANG_DATA, statusNotification: notificationEnum.SUCCESS }))


      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);