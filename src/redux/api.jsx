import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const BASE_URL = "https://daryoo.lead.crm.amaxjobs.com/api";
const BASE_URL = "https://jjc-backend-new-two.onrender.com/api";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {

        const token =
            localStorage.getItem("token") ||
            sessionStorage.getItem("token");

        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }

        headers.set("Content-Type", "application/json");

        return headers;
    },
});

export const api = createApi({
    reducerPath: "api",
    baseQuery,
    tagTypes: [
        "Auth",
        "Users",

    ],

    endpoints: (builder) => ({



        getCategory: builder.query({
            query: () => "/categories",
            providesTags: ["Auth"],
        }),




        getPlatformBySlug: builder.query({
            query: (slug) => `/platforms/${slug}`,
            providesTags: ["Users"],
        }),
        getServiceBySlug: builder.query({
            query: (slug) => `/services/${slug}`,
            providesTags: ["Users"],
        }),
        getIndustryBySlug: builder.query({
            query: (slug) => `/industries/${slug}`,
            providesTags: ["Users"],
        }),


    }),
});

export const {

    useGetCategoryQuery,
    useGetPlatformBySlugQuery,
    useGetServiceBySlugQuery,
    useGetIndustryBySlugQuery,

} = api;