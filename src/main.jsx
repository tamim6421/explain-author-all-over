import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import Login from "./Components/Login/Login.jsx";
import Register from "./Components/Registation/Register.jsx";
import AuthProvider from "./Components/Provider/AuthProvider.jsx";
import Order from "./Components/Order/Order.jsx";
import PrivetRotes from "./PrivetRoute/PrivetRotes.jsx";
import Profile from "./Components/Profile/Profile.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path:'/order',
        element:<PrivetRotes><Order></Order></PrivetRotes>
      },
      {
        path:'profile',
        element:<PrivetRotes><Profile></Profile></PrivetRotes>    
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={route}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
