import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../fetchService";
import { setNotification } from "../notificatinSlice";
import { SUCCESS_TEXT_AFTER_CHANG_DATA, SUCCESS_TEXT_DELETE } from "../../../constants";
import { notificationEnum } from "../notificatinSlice/types";
import { EditBidsDataType } from "./types";

export const fetchGetBidsData = createAsyncThunk(
  "get/bids",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.get(`/bid`);
      return response.data;
    } catch (error: any) {
      dispatch(setNotification({ messageNotification: error.response.data.error[0], statusNotification: notificationEnum.ERROR }))
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

export const FetchDeleteBid = createAsyncThunk(
  "delete_bid",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.delete(`/bid/destroy/${id}`);
      dispatch(setNotification({ messageNotification: SUCCESS_TEXT_DELETE, statusNotification: notificationEnum.SUCCESS }))

      dispatch(fetchGetBidsData())
      return response.data;
    } catch (error: any) {
      dispatch(setNotification({ messageNotification: error.response.data.error[0], statusNotification: notificationEnum.ERROR }))
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

export const FetchEditBid = createAsyncThunk(
  "edit_bid",
  async ({ id, data }: { id: number, data: EditBidsDataType }, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.put(`/bid/edit/${id}`, data);
      dispatch(setNotification({ messageNotification: SUCCESS_TEXT_AFTER_CHANG_DATA, statusNotification: notificationEnum.SUCCESS }))
      return response.data;
    } catch (error: any) {
      dispatch(setNotification({ messageNotification: error.response.data.error[0], statusNotification: notificationEnum.ERROR }))
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);