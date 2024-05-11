import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/login/Login";
import { Layout } from "../components/Layout";
import { Products } from "../pages/products/Products";
import { ProductsCard } from "../pages/productsCard/ProductsCard";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <ProductsCard />,
      },
    ],
  },
]);
