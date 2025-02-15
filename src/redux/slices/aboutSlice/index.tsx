import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchGetInfoAboutUs, fetchSaveInfoAboutUs } from "./fetchService";
import { AboutInitialState } from "./types";

const initialState: AboutInitialState = {
  aboutData: null,
  loading: false,
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    handleChangeAboutPageData: (state, action: PayloadAction<{ key: string; text: string }>) => {
      if (state.aboutData) {
        state.aboutData = {
          ...state.aboutData,
          [action.payload.key]: action.payload.text
        }
      }
    },
  },
  extraReducers: (builder) => {
    // Обработчик для about page
    builder
      .addCase(fetchGetInfoAboutUs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGetInfoAboutUs.fulfilled, (state, action) => {
        state.aboutData = action.payload
        state.loading = false;
      })
      .addCase(fetchGetInfoAboutUs.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(fetchSaveInfoAboutUs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSaveInfoAboutUs.fulfilled, (state, action) => {
        state.aboutData = action.payload
        state.loading = false;
      })
      .addCase(fetchSaveInfoAboutUs.rejected, (state) => {
        state.loading = false;
      });
  },

});
export const { handleChangeAboutPageData } = aboutSlice.actions;

export default aboutSlice.reducer;
