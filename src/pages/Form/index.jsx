import { useEffect, useState } from "react";

import {
  //useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import {
  useAddCustomerMutation,
  useGetCustomerQuery,
  useUpdateCustomerMutation,
} from "../../slices/customersApiSlice";
import { toast } from "react-toastify";

export const Form = () => {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const { id: params } = useParams();
  const [postCustomer] = useAddCustomerMutation();
  const [putCustomer, { isLoading: loadingUpdate }] =
    useUpdateCustomerMutation();
  //const { state } = useLocation();
  const navigate = useNavigate();

  //da para usar no lugar do state
  const { data: customer, isLoading, error } = useGetCustomerQuery(params);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!params) {
      await postCustomer({ id, name, email, subscribed });
      setId("");
      setName("");
      setEmail("");
      setSubscribed(false);
      toast.success("Customer added successfully");
      navigate("/");

      return;
    }
    try {
      await putCustomer({ id, name, email, subscribed });
      setId("");
      setName("");
      setEmail("");
      setSubscribed(false);
      toast.success("Customer updated successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update customer");
    }
  };
  console.log(customer);
  useEffect(() => {
    if (customer) {
      setId(customer.id ?? "");
      setName(customer.name ?? "");
      setEmail(customer.email ?? "");
      setSubscribed(customer.subscribed ?? false);
    }
  }, [customer]);

  return (
    <div className="d-flex justify-content-center">
      <div className="flex-column mt-5 p-4 border border-primary rounded">
        <h1>{!params ? "Add Customer" : " Edit Customer"}</h1>
        {loadingUpdate && <p>loading update...</p>}
        {isLoading ? (
          <p>loading customer...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <form className="w-6" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Id
              </label>
              <input
                type="text"
                className="form-control w-100"
                value={id}
                onChange={e => setId(e.target.value)}
                disabled={params ? true : false}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                onChange={e => setSubscribed(e.target.value)}
                checked={subscribed}
              />
              <label
                className="form-check-label"
                htmlFor="disabledFieldsetCheck"
              >
                Subscribed
              </label>
            </div>
            <div className="d-flex justify-content-center gap-4">
              <button type="submit" className="btn btn-primary w-50">
                {!params ? "Add" : " Edit"}
              </button>
              <button
                className="btn btn-outline-danger w-50"
                onClick={() => navigate(-1)}
              >
                Cancelar
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
