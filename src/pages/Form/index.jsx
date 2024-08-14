import { useState } from "react";

export const Form = () => {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  return (
    <div className="d-flex justify-content-center">
      <div className="flex-column mt-5 p-4 border border-primary rounded w-25">
        <h1>Add Customer</h1>
        <form className="w-6">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Id
            </label>
            <input
              type="text"
              className="form-control w-100 "
              value={id}
              onChange={e => setId(e.target.value)}
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
              value={subscribed}
              disabled
            />
            <label className="form-check-label" htmlFor="disabledFieldsetCheck">
              Subscribed
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
