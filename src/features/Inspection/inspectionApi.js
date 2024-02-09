import { apiSlice } from "../api/apiSlice";

export const inspectionAPi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // insured start
    addInsured: builder.mutation({
      query: (data) => ({
        url: "/api/inspection/addInsurance",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Inspections"],
    }),
    getAllinsurance: builder.query({
      query: (id) => `/api/inspection/insurance/${id}`,
      providesTags: ["Inspections"],
    }),
    // insured end
    // property start
    addProperty: builder.mutation({
      query: (data) => ({
        url: "/api/inspection/addProperty",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Inspections"],
    }),
    // property end
    // automobile start
    addAutomobile: builder.mutation({
      query: (data) => ({
        url: "/api/inspection/addAutomobile",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Inspections"],
    }),
    // automobile end
  }),
});

export const {
  useAddInsuredMutation,
  useAddPropertyMutation,
  useGetAllinsuranceQuery,
  useAddAutomobileMutation,
} = inspectionAPi;
