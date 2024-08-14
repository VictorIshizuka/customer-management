import { useGetCustomersQuery } from "../../slices/customersApiSlice";

export const CustomerList = () => {
  const { data, isLoading, error } = useGetCustomersQuery();

  return (
    <div className="col">
      <h1>Customers</h1>
      <a href="#" className="btn btn-primary">
        Add new
      </a>
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
                    <a href="#">Edit</a> | <a href="#">Delete</a>
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
