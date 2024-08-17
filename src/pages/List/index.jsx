import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import {
  useDeleteCustomerMutation,
  useGetCustomersQuery,
} from "../../slices/customersApiSlice";

export const List = () => {
  const { data: customers, isLoading, error } = useGetCustomersQuery();
  const [deleteCustomer] = useDeleteCustomerMutation();
  const navigate = useNavigate();

  async function onDelete(id) {
    //fazer um modal para saber se quer deletar mesmo
    //adiconar toast nas response de cada requisiçao
    if (window.confirm("are you sure?")) {
      try {
        await deleteCustomer(id);
        toast.success("Customer deleted successfully");
        return;
      } catch (error) {
        toast.error("failed to delete customer");
        console.log(error);
      }
    }
  }

  return (
    <div className="text-center">
      <h1>Customers</h1>
      <div className="text-start">
        <Link to="/form" className="btn btn-primary  ">
          Add new
        </Link>
      </div>

      {isLoading ? (
        <div>Loading customer list...</div>
      ) : error ? (
        error
      ) : (
        <table className="table  table-bordered mt-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subscribed</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => {
              return (
                <tr key={index} className="text-center">
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.subscribed ? "yes" : "no"}</td>
                  <td className="d-flex">
                    <button
                      className="btn btn-warning color-white me-2"
                      onClick={() => navigate(`/form/${customer.id}`)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger"
                      onClick={() => onDelete(customer.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
