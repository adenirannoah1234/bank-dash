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
  

  
    }),
}); 
   
export const { useCreateUserMutation } = authSlice;
