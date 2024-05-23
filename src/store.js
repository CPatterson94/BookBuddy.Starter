import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import bookSlice from "./slices/BookSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    book: bookSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
