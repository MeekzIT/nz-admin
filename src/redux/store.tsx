import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./slices/homeSliderSlice/index";
import adminSlice from "./slices/adminSlice/index"
import aboutSlice from "./slices/aboutSlice";
import projectsSlice from './slices/projectsSlice'
import notificationSlice from "./slices/notificatinSlice"
import homeAboutShot from "./slices/homeAboutSlice"
import homeOffers from "./slices/homeOffers"
import contactsSlice from "./slices/contactsSlice"
import questionMoadlSlice from "./slices/questionModalSlice"

export const store = configureStore({
  reducer: {
    home: homeSlice,
    homeAbout: homeAboutShot,
    homeOffer: homeOffers,
    admin: adminSlice,
    about: aboutSlice,
    contacts: contactsSlice,
    projects: projectsSlice,
    notification: notificationSlice,
    questionModal: questionMoadlSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
