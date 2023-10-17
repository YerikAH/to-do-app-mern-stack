import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Task {}

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "localhost:3000/api/", //TODO: Create file 'ENV'
  }),
  endpoints: (builder) => ({
    getTasks: builder.query<Task, string>({
      query: () => ``,
    }),
  }),
});

export const { useGetTasksQuery } = taskApi;
