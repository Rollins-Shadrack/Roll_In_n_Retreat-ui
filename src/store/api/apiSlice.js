import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../features/authSlice'
import { backend_local_url } from '@/constants/globalConstants'
import { endpoints } from "@/constants/endpoints";

const baseQuery = fetchBaseQuery({
    baseUrl: backend_local_url,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        // const { token } = getState().auth;

        // if (token) {
        //     headers.set("authorization", `Bearer ${token}`)
        // }
        return headers
    }
})

const baseQuerryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.originalStatus === 403) {
        //send a refresh token to get new access token
        const refreshResult = await baseQuery(
          {
            url: endpoints.auth.refresh, // backend endpoint to get refresh token
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: { refreshToken: api.getState().auth?.refreshToken ?? null },
          },
          api,
          extraOptions
        );

        if (refreshResult?.data) {
            //store the new token
            api.dispatch(setCredentials(refreshResult.data))

            //then retry the original query with the new access Token
            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
}

export const apiSlice = createApi({
  baseQuery: baseQuerryWithReauth,
  endpoints: (builder) => ({})
});

