import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";
import prodetailReducer from "./slices/prodetailSlice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
    prodetail: prodetailReducer,
  },
});
