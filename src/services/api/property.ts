import { ApiResponse } from "../../Types/ApiResponse";
import { apiSlice } from "../apiSlice";

export const propertyApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProperties: builder.query({
            query: () => "/property/all",
            transformResponse: (response: ApiResponse) => response.data,
            providesTags: ["Properties", "User"]
        }),
        getPropertyById: builder.query({
            query: (id) => `/property/${id}`,
            transformResponse: (response: ApiResponse) => response.data,
            providesTags: ["Property"]
        }),
        getCalculateBookingPrice: builder.query({
            query: (data) => `/property/calculate-price/${data.propertyId}?checkIn=${data.checkIn}&checkOut=${data.checkOut}`,
            transformResponse: (response: ApiResponse) => response.data,
        }),
        getWishlistItems: builder.query({
            query: () => `/users/wishlist`,
            transformResponse: (response: ApiResponse) => response.data,
            providesTags: ["Wishlist"]
        }),
        addWishlist: builder.mutation({
            query: (id) => ({
                url: `/users/${id}/wishlist`,
                method: 'POST',
            }),
            transformResponse: (response: ApiResponse) => response.data,
            invalidatesTags: ["Properties", "Property", "Wishlist"]
        }),
        removeWishlist: builder.mutation({
            query: (id) => ({
                url: `/users/${id}/wishlist`,
                method: 'DELETE',
            }),
            transformResponse: (response: ApiResponse) => response.data,
            invalidatesTags: ["Properties", "Property", "Wishlist"]
        }),
        searchProperties: builder.query({
            query: (queries) => `/search?${queries}`,
            transformResponse: (response: ApiResponse) => response.data,
        })
    }),
});

export const { useGetPropertiesQuery, useGetPropertyByIdQuery, useGetCalculateBookingPriceQuery, useAddWishlistMutation, useRemoveWishlistMutation, useGetWishlistItemsQuery, useSearchPropertiesQuery } = propertyApi;