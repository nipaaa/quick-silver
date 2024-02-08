import { apiSlice } from "../api/apiSlice";

export const inspectionAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addInsured: builder.mutation({
      query: (data) => ({
        url: "/api/inspection/addInsurance",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddInsuredMutation } = inspectionAPi;
