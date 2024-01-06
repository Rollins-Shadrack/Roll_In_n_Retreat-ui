import { endpoints } from "@/constants/endpoints";
import { apiSlice } from "./apiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/authSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/account/login/user",
        method: "POST",
        body: { ...credentials },
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const res = await queryFulfilled
          // console.log(res)
          // if (res) {
          //   dispatch(setCredentials(res.data));
          // }
        } catch (error) {
          // console.log(error)
        }
      }
    }),
  }),
});

export const { useLoginMutation } = authApiSlice;