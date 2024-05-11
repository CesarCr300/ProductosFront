import { Container } from "@mui/material";
import { ProductsTable } from "./components/ProductsTable";
import { ProductsContext } from "./context/ProductsContext";
import { useState } from "react";

export const Products = () => {
  const [loading, setLoading] = useState(false);
  return (
    <ProductsContext.Provider value={{ loading, setLoading }}>
      <Container>
        <h1>Productos</h1>
        <ProductsTable />
      </Container>
    </ProductsContext.Provider>
  );
};
