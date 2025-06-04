import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ToggleState {
  open: boolean;
}

const initialState: ToggleState = {
  open: false,
};

const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      console.log('Toggle reducer called, current state:', state.open);
      state.open = !state.open;
      console.log('New state:', state.open);
    },
    setOpen: (state, action: PayloadAction<boolean>) => {
      console.log('SetOpen reducer called, new value:', action.payload);
      state.open = action.payload;
    },
  },
});

export const { toggleSidebar, setOpen } = toggleSlice.actions;
export default toggleSlice.reducer;