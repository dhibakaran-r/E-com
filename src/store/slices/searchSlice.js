import { createSlice } from "@reduxjs/toolkit";

const initialState = { searchValue: {} };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addSearch(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { addSearch } = searchSlice.actions;
export default searchSlice.reducer;
