import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setIsAuthenticated, setOpenModal } from './slices/AuthSlice';
import { ApiResponse } from '../Types/ApiResponse';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:3008/api',
    prepareHeaders: (headers) => {
        const token = localStorage.getItem('token');
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithAuth = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);

    if (result.error && result.error.status === 401) {
        console.error("Token expired. Redirecting to login.");
        // api.dispatch(setOpenModal(true)); // ✅ Open login modal
        api.dispatch(setIsAuthenticated(false));
        localStorage.removeItem('token');
    }

    return result;
};

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: baseQueryWithAuth,
    tagTypes: ['User', 'verify', 'Properties', "Property", "Wishlist"],
    endpoints: (builder) => ({
        getUser: builder.query({
            query: () => ({
                url: '/users/me',
                method: 'GET',
            }),
            providesTags: ['User'],
            transformResponse: (response: ApiResponse) => response.data,
        }),
        login: builder.mutation({
            query: (data) => ({
                url: '/users/login',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Wishlist'],
        }),
        verify: builder.mutation({
            query: (data) => ({
                url: '/users/verify',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['verify'],
        }),
        forgotPassword: builder.mutation({
            query: (data) => ({
                url: '/users/forgot-password',
                method: 'POST',
                body: data,
            }),
        }),
        otpVerify: builder.mutation({
            query: (data) => ({
                url: '/users/verify-otp',
                method: 'POST',
                body: data,
            }),
        }),
        resetPassword: builder.mutation({
            query: (data) => ({
                url: '/users/reset-password',
                method: 'POST',
                body: data,
            }),
        }),
        UpdateUser: builder.mutation({
            query: (data) => ({
                url: '/users/update',
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['User'],
            transformResponse: (response: ApiResponse) => response.data,
        }),
        uploadSingleImage: builder.mutation({
            query: (formData) => ({
                url: `/upload-single`,
                method: 'POST',
                body: formData,
            }),
        }),
    })
})

export const { useLoginMutation, useVerifyMutation, useGetUserQuery, useForgotPasswordMutation, useOtpVerifyMutation, useResetPasswordMutation, useUpdateUserMutation, useUploadSingleImageMutation } = apiSlice