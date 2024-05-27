import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "./api/index";
import bookSlice from "./slices/BookSlice";
import Cart from "./slices/Cart";

const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    book: bookSlice,
    cart: Cart,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});
export default store;
