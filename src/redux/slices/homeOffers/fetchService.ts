import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../fetchService";
import { CreateOfferDataType, } from "./types";
import { SUCCESS_TEXT_AFTER_CHANG_DATA, SUCCESS_TEXT_DELETE, } from "../../../constants";
import { setNotification } from "../notificatinSlice";
import { notificationEnum } from "../notificatinSlice/types";

//GET_OFFERS_DATA
export const fetchGetOfferData = createAsyncThunk(
  "get/offer",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/offer`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

//CREATE_OFFER_DATA
export const fetchCreateOfferData = createAsyncThunk(
  "create/offer",
  async (data: CreateOfferDataType, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post(`/offer`, data);
      dispatch(setNotification({ messageNotification: SUCCESS_TEXT_AFTER_CHANG_DATA, statusNotification: notificationEnum.SUCCESS }))
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

//DELETE_OFFER_DATA
export const fetchDeleteOfferData = createAsyncThunk(
  "delete/offer",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.delete(`/offer/destroy/${id}`);
      dispatch(setNotification({ messageNotification: SUCCESS_TEXT_DELETE, statusNotification: notificationEnum.SUCCESS }))
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);