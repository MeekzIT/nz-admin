import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Appartements, AppartementsTypes, InitialStateTypes } from "./types";
import { fetchGetBuildingSchemaData, } from "./fetchService";

const initialState: InitialStateTypes = {
  appartements: null,
  appartementsInFloor: null,
  loading: false,
  floors: null,
};

const homeBuildingSchem = createSlice({
  name: "home_offers",
  initialState,
  reducers: {

    filterAppartementsFromFloor: (state, action: PayloadAction<number>) => {
      state.appartementsInFloor = state?.appartements
        ?.filter((item) => item.floor === action.payload)
        .flatMap((item) => item.Appartements) || []
    },

    handleChangeTextFildsAppartement: (state, action: PayloadAction<{ id: number; key: keyof Appartements; booleanState?: boolean; text?: string }>) => {
      state.appartementsInFloor = state.appartementsInFloor?.map((element) =>
        element.id === action.payload.id
          ? { ...element, [action.payload.key]: action.payload.booleanState ?? action.payload.text }
          : element
      ) || [];
    },

  },

  // resetOfferForCreateData: (state) => {
  //   state.offerForCreate = { image: "" }
  // }
  extraReducers: (builder) => {
    //Building_Schema
    builder
      .addCase(fetchGetBuildingSchemaData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGetBuildingSchemaData.fulfilled, (state, action: PayloadAction<AppartementsTypes[]>) => {
        state.floors = action.payload.map((data) => { return { floor: data.floor } })
        state.appartements = action.payload
        state.loading = false;
      })
      .addCase(fetchGetBuildingSchemaData.rejected, (state) => {
        state.loading = false;
      });

    // //CREATE_OFFER_DATA
    // builder
    //   .addCase(fetchCreateOfferData.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(fetchCreateOfferData.fulfilled, (state) => {
    //     state.loading = false;
    //   })
    //   .addCase(fetchCreateOfferData.rejected, (state) => {
    //     state.loading = false;
    //   });

    // //DELETE_OFFER_DATA
    // builder
    //   .addCase(fetchDeleteOfferData.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(fetchDeleteOfferData.fulfilled, (state) => {
    //     state.loading = false;
    //   })
    //   .addCase(fetchDeleteOfferData.rejected, (state) => {
    //     state.loading = false;
    //   });
  },

});




export const { filterAppartementsFromFloor, handleChangeTextFildsAppartement } = homeBuildingSchem.actions;
export default homeBuildingSchem.reducer;
