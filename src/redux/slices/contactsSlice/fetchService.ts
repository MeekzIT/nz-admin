import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../fetchService";
import { CreateTableRow } from "./types";
import { setNotification } from "../notificatinSlice";
import { SUCCESS_TEXT_AFTER_CHANG_DATA } from "../../../constants";
import { notificationEnum } from "../notificatinSlice/types";

export const fetchGetContactsData = createAsyncThunk(
  "get/contacts",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.get(`/contact-us`);
      return response.data;
    } catch (error: any) {
      dispatch(
        setNotification({
          messageNotification: error.response.data.error[0],
          statusNotification: notificationEnum.ERROR,
        })
      );
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

export const FetchCreateContact = createAsyncThunk(
  "create_Contact",
  async (data: CreateTableRow, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post(`/contact-us`, data);
      return response.data;
    } catch (error: any) {
      dispatch(
        setNotification({
          messageNotification: error.response.data.error[0],
          statusNotification: notificationEnum.ERROR,
        })
      );
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

export const FetchDeleteContact = createAsyncThunk(
  "delete_contact",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.delete(`/contact-us/destroy/${id}`);
      dispatch(fetchGetContactsData());
      return response.data;
    } catch (error: any) {
      dispatch(
        setNotification({
          messageNotification: error.response.data.error[0],
          statusNotification: notificationEnum.ERROR,
        })
      );
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

export const FetchEditContact = createAsyncThunk(
  "edit_contact",
  async (
    { id, data }: { id: number; data: CreateTableRow },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await api.put(`/contact-us/edit/${id}`, data);
      dispatch(
        setNotification({
          messageNotification: SUCCESS_TEXT_AFTER_CHANG_DATA,
          statusNotification: notificationEnum.SUCCESS,
        })
      );
      dispatch(fetchGetContactsData());
      return response.data;
    } catch (error: any) {
      dispatch(
        setNotification({
          messageNotification: error.response.data.error[0],
          statusNotification: notificationEnum.ERROR,
        })
      );
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);
