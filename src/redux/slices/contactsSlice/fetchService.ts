import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../fetchService";
import { CreateTableRow,  } from "./types";

export const fetchGetContactsData = createAsyncThunk(
  "get/contacts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`/contact-us`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

export const FetchCreateContact = createAsyncThunk(
  "create_Contact",
  async (data : CreateTableRow , { rejectWithValue }) => {
    try {
      const response = await api.post(`/contact-us`, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);

export const FetchDeleteContact = createAsyncThunk(
  "delete_contact",
  async (id :number , { rejectWithValue }) => {
    try {
      const response = await api.delete(`/contact-us/destroy/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.error[0]);
    }
  }
);