import { configureStore } from "@reduxjs/toolkit";
import tabSlice from "./tab";
import tabDetailsReducer from "./tabDetails";

const store = configureStore({
  reducer: {
    tab: tabSlice.reducer,
    tabDetails: tabDetailsReducer,
  },
});

export default store;
