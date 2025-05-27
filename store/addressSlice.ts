import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddressState {
  city: string;
  ward: string;
  street: string;
}

const initialState: AddressState = {
  city: "",
  ward: "",
  street: "",
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
      state.ward = "";
    },
    setWard(state, action: PayloadAction<string>) {
      state.ward = action.payload;
    },
    setStreet(state, action: PayloadAction<string>) {
      state.street = action.payload;
    },
    resetAddress(state) {
      state.city = "";
      state.ward = "";
      state.street = "";
    },
  },
});

export const { setCity, setWard, setStreet, resetAddress } = addressSlice.actions;
export default addressSlice.reducer;
export type { AddressState };