import { Container } from "@mui/material";
import { ProductsCreationForm } from "./components/ProductsCreationForm";
import { ProductsCreationContext } from "./context/ProductsCreationContext";
import { useState } from "react";

export const ProductsCreation = () => {
  const [loading, setLoading] = useState(false);

  return (
    <ProductsCreationContext.Provider value={{ loading, setLoading }}>
      <Container>
        <ProductsCreationForm />
      </Container>
    </ProductsCreationContext.Provider>
  );
};
