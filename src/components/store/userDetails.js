import { createSlice } from "@reduxjs/toolkit";

const initialUserDataState = {
  userData: [],
};

const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState: initialUserDataState,
  reducers: {
    replaceUserData(state, action) {
      state.userData = action.payload || [];
    },
  },
});

export const userDetailsAction = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
