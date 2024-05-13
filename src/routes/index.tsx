import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/login/Login";
import { Layout } from "../components/Layout";
import { Products } from "../pages/products/Products";
const ProductsCard = lazy(() => import("../pages/productsCard/ProductsCard"));
import { ProductsCreation } from "../pages/productsCreation/ProductsCreation";
import { UserUpdate } from "../pages/userUpdate/UserUpdate";
import { UserRecoverPassword } from "../pages/userRecoverPassword/UserRecoverPassword";
import { UserForgotPassword } from "../pages/userForgotPassword/UserForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/users/forgot-password", element: <UserForgotPassword /> },
  { path: "/users/recover-password", element: <UserRecoverPassword /> },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/create",
        element: <ProductsCreation />,
      },
      {
        path: "/products/:id",
        element: <ProductsCard />,
      },
      { path: "/users/update", element: <UserUpdate /> },
    ],
  },
]);
