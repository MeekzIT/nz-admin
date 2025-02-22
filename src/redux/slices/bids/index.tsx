import { createSlice } from "@reduxjs/toolkit";
import { FetchDeleteBid, fetchGetBidsData } from "./fetchService";
import { BidsInitioalStateTypes } from "./types";

const initialState: BidsInitioalStateTypes = {
  bidsData: null,
  loading: false
};

const bidsSlice = createSlice({
  name: "bids_slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetBidsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGetBidsData.fulfilled, (state, action) => {
        state.bidsData = action.payload
        state.loading = false;
      })
      .addCase(fetchGetBidsData.rejected, (state) => {
        state.loading = false;
      });

    builder
      .addCase(FetchDeleteBid.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchDeleteBid.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(FetchDeleteBid.rejected, (state) => {
        state.loading = false;
      });
  },

});

export default bidsSlice.reducer;
