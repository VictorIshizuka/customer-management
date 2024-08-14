import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "../store/index.js";

import { NotFound } from "../pages/NotFound/index.jsx";
import { Form } from "../pages/Form/index.jsx";
import { List } from "../pages/List";

export const RoutesApp = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form/:id" element={<Form />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};
