import { apiSlice } from "./apiSlices";

export const customerApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCustomers: builder.query({
      query: () => "/customers",
      providesTags: ["Customers"],
    }),
    addCustomer: builder.mutation({
      query: newCustomer => ({
        url: "/customers",
        method: "POST",
        body: newCustomer,
      }),
      invalidatesTags: ["Customers"],
    }),
    updateCustomer: builder.mutation({
      query: updatedCustomer => ({
        url: `/customers/${updatedCustomer.id}`,
        method: "PUT",
        body: updatedCustomer,
      }),
      invalidatesTags: ["Customers"],
    }),
    // deleteCustomer: builder.mutation({
    //   query: updatedCustomer => ({
    //     url: `/customers/${updatedCustomer.id}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const {
  useGetCustomersQuery,
  useAddCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
} = customerApiSlice;
