import { Container } from "@mui/material";
import { ProductsCardForm } from "./components/ProductsCardForm/ProductsCardForm";
import { ProductsCardContext } from "./context/ProductsCard.context";
import { useState } from "react";
import { Loading } from "../../components/Loading";

export const ProductsCard = () => {
  const [loading, setLoading] = useState(false);
  return (
    <ProductsCardContext.Provider value={{ loading, setLoading }}>
      {loading && <Loading />}
      <Container>
        <ProductsCardForm />
      </Container>
    </ProductsCardContext.Provider>
  );
};
