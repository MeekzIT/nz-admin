import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeStateTypes } from "./types";
import { fetchEditAboutUsShortData, fetchGetAboutShortData, } from "./fetchService";

const initialState: HomeStateTypes = {
  currentAboutUsData: null,
  loading: false
};

const homeAboutShot = createSlice({
  name: "home_about_short",
  initialState,
  reducers: {

    handleChangeTextFildsAboutUsShort: (state, action: PayloadAction<{ key: string; text: string, forCreateFlag?: boolean }>) => {
      if (state.currentAboutUsData && !action.payload.forCreateFlag) {
        state.currentAboutUsData = {
          ...state.currentAboutUsData,
          [action.payload.key]: action.payload.text
        }
      }
    },

  },
  extraReducers: (builder) => {
    //GET_ABOUT_SHORT_DATA
    builder
      .addCase(fetchGetAboutShortData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGetAboutShortData.fulfilled, (state, action) => {
        state.currentAboutUsData = action.payload
        state.loading = false;
      })
      .addCase(fetchGetAboutShortData.rejected, (state) => {
        state.loading = false;
      });

    //EDIT_ABOUT_US_SHORT_DATA
    builder
      .addCase(fetchEditAboutUsShortData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEditAboutUsShortData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchEditAboutUsShortData.rejected, (state) => {
        state.loading = false;
      });
  },

});




export const { handleChangeTextFildsAboutUsShort } = homeAboutShot.actions;
export default homeAboutShot.reducer;
