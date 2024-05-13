import { useState } from "react";

import { Loading } from "../../components/Loading";
import { ProductsCardContext } from "./context/ProductsCard.context";
import { ProductsCardUpdate } from "./components/ProductsCardUpdate";
import { ProductsCardHeader } from "./components/ProductsCardHeader";
import Container from "@mui/material/Container";

const ProductsCard = () => {
  const [loading, setLoading] = useState(false);
  return (
    <ProductsCardContext.Provider value={{ loading, setLoading }}>
      {loading && <Loading />}
      <Container>
        <ProductsCardHeader />
        <ProductsCardUpdate />
      </Container>
    </ProductsCardContext.Provider>
  );
};

export default ProductsCard;
