import { createSlice } from "@reduxjs/toolkit";
import { api } from "../api";

const bookSlice = createSlice({
  name: "books",
  initialState: {
    data: [],
    results: [],
  },
  reducers: {
    search: (state, { payload }) => {
      const result = state.data.filter((i) =>
        i.name.toLowerCase().includes(payload.toLowerCase())
      );
      return {
        ...state,
        results: result.length > 0 ? result : state.data,
      };
    },
  },
  // extraReducers: (builder) => {
  //   builder.addMatcher(
  //     api.endpoints.getBooks.matchFulfilled,
  //     (state, { payload }) => {
  //       return {
  //         ...state,
  //         data: payload,
  //         results: payload,
  //       };
  //     }
  //   );
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getBooks.matchFulfilled,
      (state, { payload }) => {
        return payload.books;
      }
    );
  },
});

export default bookSlice.reducer;
export const { search } = bookSlice.actions;
