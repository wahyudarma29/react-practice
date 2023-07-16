import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root.jsx";
import AboutPage from "./routes/about.jsx";
import ErrorPage from "./routes/error-page.jsx";

import "normalize.css";
import "./main.css";
import HomePage from "./routes/home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
        children: [
          {
            path: "singaraja",
            element: <h1>singaraja</h1>,
          },
          {
            path: "karangasem",
            element: <h1>karangasem</h1>,
          },
          {
            path: "denpasar",
            element: <h1>denpasar</h1>,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
