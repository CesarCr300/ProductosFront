import { useState } from "react";
import { Container } from "@mui/material";

import { Loading } from "../../components/Loading";
import { ProductsCardContext } from "./context/ProductsCard.context";
import { ProductsCardUpdate } from "./components/ProductsCardUpdate";

export const ProductsCard = () => {
  const [loading, setLoading] = useState(false);
  return (
    <ProductsCardContext.Provider value={{ loading, setLoading }}>
      {loading && <Loading />}
      <Container>
        <ProductsCardUpdate />
      </Container>
    </ProductsCardContext.Provider>
  );
};
