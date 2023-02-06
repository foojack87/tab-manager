import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  isUserDataShown: false,
};

const userSlice = createSlice({
  name: "toggleUserData",
  initialState: initialUserState,
  reducers: {
    toggleUserData(state) {
      state.isUserDataShown = !state.isUserDataShown;
    },
    showUserData(state) {
      state.isUserDataShown = true;
    },
    hideUserData(state) {
      state.isUserDataShown = false;
    },
  },
});

export const userDataActions = userSlice.actions;

export default userSlice;
