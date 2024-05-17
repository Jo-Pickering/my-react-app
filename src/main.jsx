import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./components/Root/Root";
import routes from "./routes";
import "./assets/css/index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
