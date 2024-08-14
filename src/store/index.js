import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../slices/apiSlices";

export const store = configureStore({
  reducer: { [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
