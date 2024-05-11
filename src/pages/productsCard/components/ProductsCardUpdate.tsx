import { useContext } from "react";
import { useParams } from "react-router-dom";

import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { update } from "../application/productsCard.application";
import { ProductsCardContext } from "../context/ProductsCard.context";
import { useProductModelState } from "../hooks/useProductModelState";
import { ProductsCardForm } from "./ProductsCardForm/ProductsCardForm";

export const ProductsCardUpdate = () => {
  const { id } = useParams();
  const { setLoading } = useContext(ProductsCardContext);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const { product } = useProductModelState(id, callEndpoint);
  const onSubmit = (data: any) => {
    update(id as unknown as number, data, callEndpoint);
  };

  if (product == null) return <h1>El producto no existe</h1>;
  return <ProductsCardForm onSubmit={onSubmit} product={product} />;
};
