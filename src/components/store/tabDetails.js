import { createSlice } from "@reduxjs/toolkit";

const initialTabState = { tab: [], changed: false };

const tabDetailsSlice = createSlice({
  name: "tab",
  initialState: initialTabState,
  reducers: {
    createNewTab(state, action) {
      const newTab = action.payload;
      state.changed = true;
      state.tab.push({
        id: newTab.id,
        user: newTab.user,
        payer: newTab.payer,
        amount: newTab.amount,
        description: newTab.description,
        date: newTab.date,
        paymethod: newTab.paymethod,
      });
    },
    deleteTab(state, action) {
      const id = action.payload;
      state.tab = state.tab.filter((tabs) => tabs.id !== id);
      state.changed = true;
    },
    replaceTab(state, action) {
      state.items = action.payload.items || [];
    },
  },
});

export const tabActions = tabDetailsSlice.actions;
export default tabDetailsSlice.reducer;
