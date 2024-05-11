import { Container } from "@mui/material";
import { ProductsTable } from "./components/ProductsTable";
import { ProductsContext } from "./context/ProductsContext";
import { useState } from "react";
import { ProductsHeader } from "./components/ProductsHeader";

export const Products = () => {
  const [loading, setLoading] = useState(false);
  return (
    <ProductsContext.Provider value={{ loading, setLoading }}>
      <Container>
        <ProductsHeader />
        <ProductsTable />
      </Container>
    </ProductsContext.Provider>
  );
};
