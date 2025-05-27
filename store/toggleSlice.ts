import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    open: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
  },
});

export const { toggleSidebar } = toggleSlice.actions;
export default toggleSlice.reducer;