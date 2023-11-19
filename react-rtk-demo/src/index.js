import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";

import { Provider } from "react-redux";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* contextAPI under the hood */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
