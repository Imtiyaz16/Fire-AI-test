import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./redux/dataSlice"; // Import your slice
import App from "./App";

const store = configureStore({
  reducer: {
    data: dataSlice, // Add your slice reducer
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
