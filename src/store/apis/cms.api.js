import { endpoints } from "@/constants/endpoints";
import { apiSlice } from "./apiSlice";

export const cmsSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getCities: builder.query({
            query: () => ({
                url: endpoints.cms.city.get(),
                method:"GET"
            })
        }),
        getServiceCategories: builder.query({
            query: () => ({
                url: endpoints.cms.serviceCategory.get(),
                method:"GET"
            })
        })
    })
})

export const{useGetCitiesQuery, useGetServiceCategoriesQuery} = cmsSlice