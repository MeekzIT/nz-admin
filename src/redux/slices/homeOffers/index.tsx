import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OfferInitialStateTypes } from "./types";
import { fetchCreateOfferData, fetchDeleteOfferData, fetchGetOfferData, } from "./fetchService";

const initialState: OfferInitialStateTypes = {
  allOfferData: [],
  offerForCreate: { image: "" },
  loading: false
};

const homeOffers = createSlice({
  name: "home_offers",
  initialState,
  reducers: {

    handleChangeTextFildsOffer: (state, action: PayloadAction<{ key: string; text: string, forCreateFlag?: boolean }>) => {
      state.offerForCreate = {
        ...state.offerForCreate,
        [action.payload.key]: action.payload.text
      }
    },

    resetOfferForCreateData: (state) => {
      state.offerForCreate = { image: "" }
    }

  },
  extraReducers: (builder) => {
    //GET_ALL_OFFERS
    builder
      .addCase(fetchGetOfferData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGetOfferData.fulfilled, (state, action) => {
        state.allOfferData = action.payload
        state.loading = false;
      })
      .addCase(fetchGetOfferData.rejected, (state) => {
        state.loading = false;
      });

    //CREATE_OFFER_DATA
    builder
      .addCase(fetchCreateOfferData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCreateOfferData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchCreateOfferData.rejected, (state) => {
        state.loading = false;
      });

    //DELETE_OFFER_DATA
    builder
      .addCase(fetchDeleteOfferData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDeleteOfferData.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(fetchDeleteOfferData.rejected, (state) => {
        state.loading = false;
      });
  },

});




export const { handleChangeTextFildsOffer, resetOfferForCreateData } = homeOffers.actions;
export default homeOffers.reducer;
