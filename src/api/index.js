import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "fsa-book-buddy-b6e748d1380d.herokuapp.com/api/",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      headers.set("Authorization", "Bearer ${Token}");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "books",
    }),
    getBook: builder.query({
      query: (id) => `books/:${id}`,
    }),
  }),
});

export const { useGetBooksQuery } = api;
