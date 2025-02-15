import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HomeSliterNamesType, HomeStateTypes } from "./types";
import { fetchCreateSlider, fetchDeleteSlider, fetchEditSlider, fetchGetSliderData, fetchGetSlidersData } from "./fetchService";
import { initialDataCreateSlider } from "./constants";



const initialState: HomeStateTypes = {
  sliderData: null,
  sliderNames: [],
  currentSlider: null,
  createSliderData: initialDataCreateSlider,
  loading: false
};

const homeSlice = createSlice({
  name: "home_Slice",
  initialState,
  reducers: {
    resetStates: (state) => {
      state.currentSlider = null
      state.sliderData = null
      state.loading = false
    },

    handleChangeTextFilds: (state, action: PayloadAction<{ key: string; text: string, forCreateFlag?: boolean }>) => {
      if (state.currentSlider && !action.payload.forCreateFlag) {
        state.currentSlider = {
          ...state.currentSlider,
          [action.payload.key]: action.payload.text
        }
      }

      if (action.payload.forCreateFlag && state.createSliderData) {
        state.createSliderData = {
          ...state.createSliderData,
          [action.payload.key]: action.payload.text
        }
      }
    },

  },
  extraReducers: (builder) => {
    //GET_ALL_SLIDERS
    builder
      .addCase(fetchGetSlidersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGetSlidersData.fulfilled, (state, action) => {
        state.sliderData = action.payload.sliders

        if (action.payload) {
          const convertData = action.payload.sliders.map(({ id, titleAm }: HomeSliterNamesType) => {
            return { id, titleAm }
          })
          state.sliderNames = convertData
        }
        state.loading = false;
      })
      .addCase(fetchGetSlidersData.rejected, (state) => {
        state.loading = false;
      });

    //GET_SINGLE_SLIDER
    builder
      .addCase(fetchGetSliderData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGetSliderData.fulfilled, (state, action) => {
        state.currentSlider = action.payload.slider
        state.loading = false;
      })
      .addCase(fetchGetSliderData.rejected, (state) => {
        state.loading = false;
      });

    //CREATE_SLIDER
    builder
      .addCase(fetchCreateSlider.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCreateSlider.fulfilled, (state, action) => {
        state.currentSlider = action.payload.slider
        state.loading = false;
      })
      .addCase(fetchCreateSlider.rejected, (state) => {
        state.loading = false;
      });

    //DELETE_SLIDER
    builder
      .addCase(fetchDeleteSlider.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDeleteSlider.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchDeleteSlider.rejected, (state) => {
        state.loading = false;
      });

    //EDIT_SLIDER
    builder
      .addCase(fetchEditSlider.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEditSlider.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchEditSlider.rejected, (state) => {
        state.loading = false;
      });
  },

});




export const { resetStates, handleChangeTextFilds } = homeSlice.actions;
export default homeSlice.reducer;
