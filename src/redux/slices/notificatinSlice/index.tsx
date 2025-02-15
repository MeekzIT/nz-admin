import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notificationEnum, NotificationState } from "./types";

const initialState: NotificationState = {
    dataAboutNotification: {
        messageNotification: "",
        statusNotification: notificationEnum.OFF,
    },
};

const notificationSlice = createSlice({
    name: "notification",
    initialState,
    reducers: {
        setNotification: (
            state,
            action: PayloadAction<{ messageNotification: string; statusNotification: notificationEnum }>
        ) => {
            state.dataAboutNotification = action.payload;
        },
    },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
