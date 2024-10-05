import { createSlice } from "@reduxjs/toolkit";

const initialState = { productID: {} };

const prodetailSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    addProDetails(state, action) {
      state.productID = action.payload;
    },
  },
});

export const { addProDetails } = prodetailSlice.actions;
export default prodetailSlice.reducer;
