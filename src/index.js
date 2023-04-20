import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  /* To send the state throughout my application I need a provider 
  that'll prive this data to all component */
  <Provider store={store}>
    <App />
  </Provider>
);
