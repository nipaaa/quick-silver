import { apiSlice } from "../api/apiSlice";

export const companyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllCompany: builder.query({
      query: () => "/api/company/",
      providesTags: ["Companies"],
    }),
    getMyCompanyInfo: builder.query({
      query: (id) => `/api/company/info/${id}`,
      providesTags: ["MyCompany"],
    }),
    updateCompanyInfo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/api/company/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["MyCompany"],
    }),
  }),
});

export const {
  useGetAllCompanyQuery,
  useGetMyCompanyInfoQuery,
  useUpdateCompanyInfoMutation,
} = companyApi;
