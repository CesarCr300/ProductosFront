import { useState } from "react";

import { Loading } from "../../components/Loading";
import { ProductsCardContext } from "./context/ProductsCard.context";
import { ProductsCardUpdate } from "./components/ProductsCardUpdate";
import { ProductsHeader } from "./components/ProductsHeader";
import Container from "@mui/material/Container";

export const ProductsCard = () => {
  const [loading, setLoading] = useState(false);
  return (
    <ProductsCardContext.Provider value={{ loading, setLoading }}>
      {loading && <Loading />}
      <Container>
        <ProductsHeader />
        <ProductsCardUpdate />
      </Container>
    </ProductsCardContext.Provider>
  );
};
