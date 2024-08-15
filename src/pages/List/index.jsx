import { Link, useNavigate } from "react-router-dom";
import {
  useDeleteCustomerMutation,
  useGetCustomersQuery,
} from "../../slices/customersApiSlice";

export const List = () => {
  const { data: customers, isLoading, error } = useGetCustomersQuery();
  const { deleteCustomer } = useDeleteCustomerMutation();
  const navigate = useNavigate();

  async function onDelete(id) {
    alert(`${id}`);
  }

  return (
    <div className="text-center">
      <h1>Customers</h1>
      <div className="text-start">
        <Link to="/form" className="btn btn-primary w-25 ">
          Add new
        </Link>
      </div>

      {isLoading ? (
        <div>Loading...</div>
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
                      onClick={() =>
                        navigate(`/form/${customer.id}`, { state: customer })
                      }
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
