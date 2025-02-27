import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3008/api' }),
    tagTypes: ['User', 'verify','Properties'],
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: '/users/login',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['User'],
        }),
        verify: builder.mutation({
            query: (data) => ({
                url: '/users/verify',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['verify'],
        }),
        getUser: builder.query({
            query: (token) => ({
                url: '/users/me',
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            }),
            providesTags: ['User'],
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
        })
    }),
})

export const { useLoginMutation, useVerifyMutation, useGetUserQuery, useForgotPasswordMutation, useOtpVerifyMutation, useResetPasswordMutation } = apiSlice