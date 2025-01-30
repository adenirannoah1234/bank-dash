import ForgotPassword from "@/app/(auth)/forgot-password/page";
import { apiSlice } from "../api.slice";


export const authSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
   
        createUser: builder.mutation({
            query: (credentials) => ({
                url: `/signup`,
                method: "POST",
                body: credentials,
            }),
        }),
        forgotPassword: builder.mutation({
            query: (email) => ({
                url: `/forgot-password`,
                method: "POST",
                body: email,
            }),
        }),
        verifyOtp: builder.mutation({
            query: (credentials) => ({
                url: `/verify-otp`,
                method: "POST",
                body: credentials,
            }),
        }),
        resetPassword: builder.mutation({
            query: (payload) => ({
                url: `/reset-password`,
                method: "POST",
                body: payload,
            }),
        }),
        getUserDetails: builder.query({
            query: () => ({
                url: `/user`,
                method: "GET",
                
            }),
        }),
        updateUserDetails: builder.mutation({
            query: (formData) => ({
                url: `/user`,
                method: "PUT",
                body: formData,
              formData:true,
            }),
        }),
           
          
  

  
    }),
}); 
   
export const { useCreateUserMutation, useForgotPasswordMutation, useVerifyOtpMutation, useResetPasswordMutation, useGetUserDetailsQuery, useUpdateUserDetailsMutation } = authSlice;
