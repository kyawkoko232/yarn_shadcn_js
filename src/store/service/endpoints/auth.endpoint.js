import { ApiService } from "../ApiService";

const authEndpoints = ApiService.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (arg) => ({
        url: "/login",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: arg,
      }),
    }),
    register: builder.mutation({
      query: (arg) => ({
        url: "/register",
        method: "POST",
        body: arg,
        headers: { "Content-Type": "application/json" },
    
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authEndpoints;