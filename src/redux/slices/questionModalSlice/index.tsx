import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionModelType } from "./types";
import { QuestionModalActions } from "../../../types";

const initialState: QuestionModelType = {
  isOpenModal: false,
  title: "",
  actionKey: null as QuestionModalActions | null,
  elemetId: null
};

const questionMoadlSlice = createSlice({
  name: "question_modal_slice",
  initialState,
  reducers: {

    toggleModalStatus: (state) => {
      state.isOpenModal = !state.isOpenModal
    },

    setTitleForQuestionModal: (state, action: PayloadAction<{ titleModal: string }>) => {
      state.title = action.payload.titleModal
    },

    setActionKey: (state, action: PayloadAction<{ actionKey: QuestionModalActions }>) => {
      state.actionKey = action.payload.actionKey
    },

    setElemetId :(state, action: PayloadAction<{ id: number }>) => {
      state.elemetId = action.payload.id
    },

    resetQuestionModalData: (state) => {
      state.isOpenModal = false
      state.actionKey = null
      state.title = ""
    },
  },
});




export const { toggleModalStatus, resetQuestionModalData, setTitleForQuestionModal, setElemetId, setActionKey } = questionMoadlSlice.actions;
export default questionMoadlSlice.reducer;
