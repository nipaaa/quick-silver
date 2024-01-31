import Cookies from "js-cookie";

import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/api/user/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/api/user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          Cookies.set(
            "quickSilverAuth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error) {}
      },
    }),
    verifyEmailWithOtp: builder.mutation({
      query: (data) => ({
        url: "/api/user/verifyEmail",
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          Cookies.set(
            "quickSilverAuth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );

          dispatch(
            userLoggedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        } catch (error) {}
      },
    }),

    sendResetPasswordLink: builder.mutation({
      query: (data) => ({
        url: "/api/user/resetPassword",
        method: "POST",
        body: data,
      }),
    }),
    resendEmailVerifictionCode: builder.mutation({
      query: (data) => ({
        url: "/api/user/resendVerificationCode",
        method: "POST",
        body: data,
      }),
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: "/api/user/updatePassword",
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useVerifyEmailWithOtpMutation,
  useLoginMutation,
  useSendResetPasswordLinkMutation,
  useResendEmailVerifictionCodeMutation,
  useUpdatePasswordMutation,
} = authAPi;
