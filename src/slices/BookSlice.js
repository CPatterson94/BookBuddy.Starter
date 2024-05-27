import { createSlice } from "@reduxjs/toolkit";
import { bookApi } from "../api/index";

const bookSlice = createSlice({
  name: "books",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      bookApi.endpoints.getBooks.matchFulfilled,
      (state, { payload }) => {
        return payload;
      }
    );
  },
});
export default bookSlice.reducer;
