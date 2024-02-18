import { endpoints } from "@/constants/endpoints";
import { backend_local_url } from "@/constants/globalConstants";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut, setCredentials } from "../features/authSlice";

export const baseQuery = fetchBaseQuery({
  baseUrl: backend_local_url,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { token } = getState().auth;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    const refreshResult = await baseQuery(
      {
        url: endpoints.auth.refresh(),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          refreshToken: api.getState().auth?.refreshToken ?? null,
        },
      },
      api,
      extraOptions
    );

    if (refreshResult?.data) {
      api.dispatch(setCredentials(refreshResult.data));

      //send the original query then:
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logOut());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  tagTypes: [],
  endpoints: () => ({}),
});
