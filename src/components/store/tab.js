import { createSlice } from "@reduxjs/toolkit";

const initialTabFormState = { isTabFormShown: false, isFormValid: false };

const tabSlice = createSlice({
  name: "toggleTabForm",
  initialState: initialTabFormState,
  reducers: {
    toggleTabForm(state) {
      state.isTabFormShown = !state.isTabFormShown;
    },
    hideTabForm(state) {
      state.isTabFormShown = false;
    },
    showTabForm(state) {
      state.isTabFormShown = true;
    },
    validForm(state) {
      state.isFormValid = true;
    },
    invalidForm(state) {
      state.isFormValid = false;
    },
  },
});

export const myTabFormActions = tabSlice.actions;

export default tabSlice;
