import { createSlice } from "@reduxjs/toolkit";
import { fetchGetContactsData, } from "./fetchService";
import { ContactsStateTypes } from "./types";

const initialState: ContactsStateTypes = {
  contactsData: [],
  loading: false
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGetContactsData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchGetContactsData.fulfilled, (state, action) => {
        state.contactsData = action.payload
        state.loading = false;
      })
      .addCase(fetchGetContactsData.rejected, (state) => {
        state.loading = false;
      });
  },

});




// export const { handleChangeTextFildsAboutUsShort } = contactsSlice.actions;
export default contactsSlice.reducer;
