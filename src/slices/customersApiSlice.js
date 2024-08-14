import { apiSlice } from "./apiSlices";

export const customerApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCustomers: builder.query({ query: () => "/customers" }),
    // postCustomers: builder.mutation({
    //   mutation: params => {
    //     "customers", params;
    //   },
    // }),
    // putCustomers: builder.mutation({
    //   mutation: (params, id) => {
    //     `customers${id}`, params;
    //   },
    // }),
  }),
});

export const { useGetCustomersQuery } = customerApiSlice;
