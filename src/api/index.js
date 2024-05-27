import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/",
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "books",
    }),
    getBook: builder.query({
      query: (id) => `books/${id}`,
    }),
  }),
});
export const { useGetBooksQuery, useGetBookQuery } = bookApi;
