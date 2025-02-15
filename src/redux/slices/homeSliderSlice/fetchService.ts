import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../fetchService";
import { HomeCreateSliterType, HomeSliterType } from "./types";
import { SUCCESS_TEXT_AFTER_CREATE_DATA, SUCCESS_TEXT_DELETE } from "../../../constants";
import { setNotification } from "../notificatinSlice";
import { notificationEnum } from "../notificatinSlice/types";

//GET_ALL_SLIDERS
export const fetchGetSlidersData = createAsyncThunk(
  "get/sliders",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/slider");

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

//GET_SINGLE_SLIDER
export const fetchGetSliderData = createAsyncThunk(
  "get/slider",
  async (id: number, { rejectWithValue }) => {
    try {
      const response = await api.get(`/slider/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

//CREATE_SLIDERS
export const fetchCreateSlider = createAsyncThunk(
  "create/slider",
  async (data: HomeCreateSliterType, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post("/slider", data);
      dispatch(setNotification({ messageNotification: SUCCESS_TEXT_AFTER_CREATE_DATA, statusNotification: notificationEnum.SUCCESS }));
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

//DELETE_SLIDER
export const fetchDeleteSlider = createAsyncThunk(
  "delete/slider",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.delete(`/slider/destroy/${id}`);
      dispatch(setNotification({ messageNotification: SUCCESS_TEXT_DELETE, statusNotification: notificationEnum.SUCCESS }));

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

//EDIT_SLIDER
export const fetchEditSlider = createAsyncThunk(
  "edit/slider",
  async ({ id, data }: { id: number, data: HomeSliterType }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/slider/edit/${id}`, data);

      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);