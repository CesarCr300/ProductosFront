import { useState } from "react";
import Container from "@mui/material/Container";

import { ProductsCreationForm } from "./components/ProductsCreationForm";
import { ProductsCreationContext } from "./context/ProductsCreationContext";
import { ProductsCreationHeader } from "./components/ProductsCreationHeader";

export const ProductsCreation = () => {
  const [loading, setLoading] = useState(false);

  return (
    <ProductsCreationContext.Provider value={{ loading, setLoading }}>
      <Container>
        <ProductsCreationHeader />
        <ProductsCreationForm />
      </Container>
    </ProductsCreationContext.Provider>
  );
};
