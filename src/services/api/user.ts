import { ApiResponse } from "../../Types/ApiResponse";
import { apiSlice } from "../apiSlice";

export const propertyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getUsersDetails: builder.query({
            query: (id) => `/users/${id}`,
            transformResponse: (response: ApiResponse) => response.data,
        }),
    }),
});

export const { useGetUsersDetailsQuery } = propertyApi;