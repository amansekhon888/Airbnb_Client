import { ApiResponse } from "../../Types/ApiResponse";
import { apiSlice } from "../apiSlice";

export const propertyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProperties: builder.query({
            query: () => "/property/all",
            transformResponse: (response: ApiResponse) => response.data,
            providesTags: ["Properties"]
        })
    }),
});

export const { useGetPropertiesQuery } = propertyApi;