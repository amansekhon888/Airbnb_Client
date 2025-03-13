import { ApiResponse } from "../../Types/ApiResponse";
import { apiSlice } from "../apiSlice";

export const propertyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProperties: builder.query({
            query: () => "/property/all",
            transformResponse: (response: ApiResponse) => response.data,
            providesTags: ["Properties"]
        }),
        getPropertyById: builder.query({
            query: (id) => `/property/${id}`,
            transformResponse: (response: ApiResponse) => response.data,
            providesTags: ["Property"]
        }),
        getCalculateBookingPrice: builder.query({
            query: (data) => `/property/calculate-price/${data.propertyId}?checkIn=${data.checkIn}&checkOut=${data.checkOut}`,
            transformResponse: (response: ApiResponse) => response.data,
        })
    }),
});

export const { useGetPropertiesQuery, useGetPropertyByIdQuery, useGetCalculateBookingPriceQuery } = propertyApi;