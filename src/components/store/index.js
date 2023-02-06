import { configureStore } from "@reduxjs/toolkit";
import tabSlice from "./tab";
import tabDetailsReducer from "./tabDetails";
import userSlice from "./user";
import userDetailsReducer from "./userDetails";

const store = configureStore({
  reducer: {
    tab: tabSlice.reducer,
    tabDetails: tabDetailsReducer,
    users: userSlice.reducer,
    userDetails: userDetailsReducer,
  },
});

export default store;
