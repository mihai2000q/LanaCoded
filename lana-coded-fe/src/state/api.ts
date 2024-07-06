// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import Blog from "../types/Blog.model.ts";
import {GetBlogQueryParams} from "../types/Blog.request.ts";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['Blogs'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query<Blog[], undefined>({
      query: () => ({ url: `blogs/all` }),
      providesTags: ['Blogs']
    }),
    getBlog: builder.query<Blog, GetBlogQueryParams>({
      query: (arg) => ({ url: `blogs/${arg.id}` }),
      providesTags: ['Blogs']
    }),
  }),
})
export const {
  useGetAllBlogsQuery,
  useGetBlogQuery
} = api