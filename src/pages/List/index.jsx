import { Link } from "react-router-dom";
import { useGetCustomersQuery } from "../../slices/customersApiSlice";

export const List = () => {
  const { data, isLoading, error } = useGetCustomersQuery();

  return (
    <div className="col">
      <h1>Customers</h1>
      <Link to="/form" className="btn btn-primary">
        Add new
      </Link>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        error
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subscribed</th>
            </tr>
          </thead>
          <tbody>
            {data.map((customer, index) => {
              return (
                <tr key={index}>
                  <td>{customer.id}</td>
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.subscribed}</td>
                  <td>
                    <Link to={`/form/${customer.id}`}>Edit</Link> |
                    <Link onClick={() => {}}>Delete</Link>
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
