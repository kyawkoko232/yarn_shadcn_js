import {createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'


export const ApiService = createApi({
    reducerPath : "products",
    baseQuery : fetchBaseQuery({
        baseUrl: "https://dummyjson.com/"
    }),
    endpoints: () => ({}),

   
})