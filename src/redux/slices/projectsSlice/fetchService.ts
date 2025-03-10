import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../fetchService";
import { CreateNewProjectsType } from "./types";
import { setNotification } from "../notificatinSlice";
import { notificationEnum } from "../notificatinSlice/types";
import {
  SUCCESS_TEXT_AFTER_CHANG_DATA,
  SUCCESS_TEXT_AFTER_CREATE_DATA,
  SUCCESS_TEXT_DELETE,
} from "../../../constants";
import { resetCreateObjectAfterCreate, resetCurrentProjectData } from ".";

//GET_ALL_PROJECTS
export const fetchGetInfoProjects = createAsyncThunk(
  "get/projects/page",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.get("/projects");
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

//GET_PROJECT BY ID
export const fetchGetInfoProject = createAsyncThunk(
  "get/project/page",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.get(`/projects/${id}`);
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

//EDIT_PROJECT
export const fetchChangeInfoProjects = createAsyncThunk(
  "change/projects/page",
  async (
    { productId, data }: { productId: number; data: CreateNewProjectsType },
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await api.put(`/projects/edit/${productId}`, data);
      dispatch(
        setNotification({
          messageNotification: SUCCESS_TEXT_AFTER_CHANG_DATA,
          statusNotification: notificationEnum.SUCCESS,
        })
      );
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

//CREATE_PROJECT
export const fetchCreateNewProject = createAsyncThunk(
  "create/project",
  async (data: CreateNewProjectsType, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post(`/projects`, data);
      dispatch(
        setNotification({
          messageNotification: SUCCESS_TEXT_AFTER_CREATE_DATA,
          statusNotification: notificationEnum.SUCCESS,
        })
      );
      dispatch(resetCreateObjectAfterCreate());
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

//DELETE_PROJECT
export const fetchDeleteProject = createAsyncThunk(
  "delete/project",
  async (id: number, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.delete(`/projects/destroy/${id}`);
      dispatch(resetCurrentProjectData());
      dispatch(fetchGetInfoProjects());
      dispatch(
        setNotification({
          messageNotification: SUCCESS_TEXT_DELETE,
          statusNotification: notificationEnum.SUCCESS,
        })
      );
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
