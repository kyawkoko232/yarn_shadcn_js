import {createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'


export const ApiService = createApi({
    reducerPath : "api",
    baseQuery : fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8000/api/v1"
    }),
    endpoints: (builder) => ({}),

   
})