import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProjectsInitialState, ProjectsNamesType } from "./types";
import { fetchChangeInfoProjects, fetchCreateNewProject, fetchDeleteProject, fetchGetInfoProject, fetchGetInfoProjects } from "./fetchService";
import { initialDataForCreateProduct } from "./constants";

const initialState: ProjectsInitialState = {
  projectsNames: [],
  currentProject: {},
  createProectdata: initialDataForCreateProduct,
  loading: false,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {

    handleChangeProjectData: (state, action: PayloadAction<{ key: string; text: string, forCreateFlag?: boolean }>) => {
      if (state.currentProject && !action.payload.forCreateFlag) {
        state.currentProject = {
          ...state.currentProject,
          [action.payload.key]: action.payload.text
        }
      }

      if (state.createProectdata && action.payload.forCreateFlag) {
        state.createProectdata = {
          ...state.createProectdata,
          [action.payload.key]: action.payload.text
        }
      }
    },

    resetCreateObjectAfterCreate: (state) => {
      state.createProectdata = initialDataForCreateProduct
    },

    resetCurrentProjectData: (state) => {
      state.currentProject = {}
    }
  },

  extraReducers: (builder) => {
    builder //GET_ALL_PROJECTS
      .addCase(fetchGetInfoProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGetInfoProjects.fulfilled, (state, action) => {
        if (action.payload) {
          const convertData = action.payload.map(({ id, titleAm }: ProjectsNamesType) => {
            return { id, titleAm }
          })
          state.projectsNames = convertData
        }
        state.loading = false;
      })
      .addCase(fetchGetInfoProjects.rejected, (state) => {
        state.loading = false;
      });

    //EDIT_PROJECT
    builder
      .addCase(fetchChangeInfoProjects.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChangeInfoProjects.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchChangeInfoProjects.rejected, (state) => {
        state.loading = false;
      });

    //GET_PROJECT BY ID
    builder
      .addCase(fetchGetInfoProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGetInfoProject.fulfilled, (state, action) => {
        state.currentProject = action.payload
        state.loading = false;
      })
      .addCase(fetchGetInfoProject.rejected, (state) => {
        state.loading = false;
      });

    //CREATE_PROJECT
    builder
      .addCase(fetchCreateNewProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCreateNewProject.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchCreateNewProject.rejected, (state) => {
        state.loading = false;
      });

    //DELETE_PROJECT
    builder
      .addCase(fetchDeleteProject.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDeleteProject.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchDeleteProject.rejected, (state) => {
        state.loading = false;
      });
  },

});

export const { handleChangeProjectData, resetCreateObjectAfterCreate, resetCurrentProjectData } = projectsSlice.actions;

export default projectsSlice.reducer;
