import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../fetchService";
import { HomeAboutUsShortType, } from "./types";
import { SUCCESS_TEXT_AFTER_CHANG_DATA, } from "../../../constants";
import { setNotification } from "../notificatinSlice";
import { notificationEnum } from "../notificatinSlice/types";

//GET_ABOUT_SHORT_DATA
export const fetchGetAboutShortData = createAsyncThunk(
  "get/slider",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await api.get(`/about-short/single/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

//EDIT_ABOUT_US_SHORT_DATA
export const fetchEditAboutUsShortData = createAsyncThunk(
  "edit/About/Short",
  async ({ id, data }: { id: number, data: HomeAboutUsShortType }, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.put(`/about-short/edit/${id}`, data);
      dispatch(setNotification({ messageNotification: SUCCESS_TEXT_AFTER_CHANG_DATA, statusNotification: notificationEnum.SUCCESS }))
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);