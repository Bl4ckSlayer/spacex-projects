import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const ApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v3/",
  }),
  endpoints: (builder) => ({
    getAllLunches: builder.query({
      query: () => "launches",
    }),
    // get launch by id
    getLaunchById: builder.query({
      query: (id) => `launches/${id}`,
    }),
  }),
});

export const { useGetAllLunchesQuery, useGetLaunchByIdQuery } = ApiSlice;
export default ApiSlice;
