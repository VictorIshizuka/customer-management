import { RoutesApp } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <RoutesApp />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
