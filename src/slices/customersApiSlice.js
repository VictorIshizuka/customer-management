import { apiSlice } from "./apiSlices";

export const customerApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCustomers: builder.query({
      query: () => "/customers",
      providesTags: ["Customers"],
    }),
    getCustomer: builder.query({
      query: id => `/customers/${id}`,
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
    deleteCustomer: builder.mutation({
      query: id => ({
        url: `/customers/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Customers"],
    }),
  }),
});

export const {
  useGetCustomersQuery,
  useAddCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
  useGetCustomerQuery,
} = customerApiSlice;
