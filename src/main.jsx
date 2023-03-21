import React from "react";
import ReactDOM from "react-dom/client";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./App";
import "./styling/App.scss";
import configureStore from "./configureStore";

const store = configureStore();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
