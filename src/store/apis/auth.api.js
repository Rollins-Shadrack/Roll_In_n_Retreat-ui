import { endpoints } from "@/constants/endpoints";
import { apiSlice } from "./apiSlice";
import { setCredentials } from "../features/authSlice";

export const authsSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: endpoints.auth.login(),
        method: "POST",
        body,
      }),
      onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
        const result = await queryFulfilled;
        if (result?.data) {
          dispatch(setCredentials(result.data));
        }
      },
    }),
    loginPartner: builder.mutation({
      query: (body) => ({
        url: endpoints.auth.loginPartner(),
        method: "POST",
        body,
      }),
      onQueryStarted: async (body, { dispatch, queryFulfilled }) => {
        const result = await queryFulfilled;
        if (result?.data) {
          dispatch(setCredentials(result.data));
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: endpoints.auth.logout(),
        method: "POST",
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: endpoints.auth.registerUser(),
        method: "POST",
        body,
      }),
    }),
    onboard: builder.mutation({
      query: (body) => ({
        url: endpoints.auth.registerPartner(),
        method: "POST",
        body,
      }),
    }),
    confirmUser: builder.mutation({
      query: (body) => ({
        url: endpoints.auth.confirmUser(),
        method: "POST",
        body,
      }),
    }),
    confirmPartner: builder.mutation({
      query: (body) => ({
        url: endpoints.auth.confirmPartner(),
        method: "POST",
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: endpoints.auth.forgotPassword(),
        method: "POST",
        body,
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: endpoints.auth.resetPassword(),
        method: "POST",
        body,
      }),
    }),
    validateBusinessName: builder.mutation({
      query: (body) => ({
        url: endpoints.auth.validateBusinessName(),
        method: "POST",
        body,
      }),
    }),
    validateEmail: builder.mutation({
      query: (body) => ({
        url: endpoints.auth.validateEmail(),
        method: "POST",
        body,
      }),
    }),
  }),
});     

export const {
  useLoginMutation,
  useLoginPartnerMutation,
  useLogoutMutation,
  useRegisterMutation,
  useOnboardMutation,
  useConfirmUserMutation,
  useConfirmPartnerMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useValidateBusinessNameMutation,
  useValidateEmailMutation
} = authsSlice;