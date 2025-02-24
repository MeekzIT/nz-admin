import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../fetchService";
import { EditAppartementTypes, } from "./types";
import { SUCCESS_TEXT_AFTER_CHANG_DATA, SUCCESS_TEXT_DELETE, } from "../../../constants";
import { setNotification } from "../notificatinSlice";
import { notificationEnum } from "../notificatinSlice/types";

//GET_OFFERS_DATA
export const fetchGetBuildingSchemaData = createAsyncThunk(
  "get/schema",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.get(`/schema`);
      console.log(response.data, "response");

      return response.data;
    } catch (error: any) {
      dispatch(setNotification({ messageNotification: error.response.data.error[0], statusNotification: notificationEnum.ERROR }))
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

//CREATE_OFFER_DATA
export const fetchEditAppartementData = createAsyncThunk(
  "edit/Appartement",
  async ({ id, data }: { id: number, data: EditAppartementTypes }, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post(`/schema/edit/${id}`, data);
      dispatch(setNotification({ messageNotification: SUCCESS_TEXT_AFTER_CHANG_DATA, statusNotification: notificationEnum.SUCCESS }))
      return response.data;
    } catch (error: any) {
      dispatch(setNotification({ messageNotification: error.response.data.error[0], statusNotification: notificationEnum.ERROR }))
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
      dispatch(fetchGetOfferData())
      dispatch(setNotification({ messageNotification: SUCCESS_TEXT_DELETE, statusNotification: notificationEnum.SUCCESS }))
      return response.data;
    } catch (error: any) {
      dispatch(setNotification({ messageNotification: error.response.data.error[0], statusNotification: notificationEnum.ERROR }))
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);