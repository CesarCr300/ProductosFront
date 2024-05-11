import { useContext } from "react";
import { useParams } from "react-router-dom";

import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { update } from "../application/productsCard.application";
import { ProductsCardContext } from "../context/ProductsCard.context";
import { useProductModelState } from "../hooks/useProductModelState";
import { ProductsCardForm } from "../../../components/Products/ProductsCardForm/ProductsCardForm";

export const ProductsCardUpdate = () => {
  const { id } = useParams();
  const { setLoading } = useContext(ProductsCardContext);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const { product } = useProductModelState(id, callEndpoint);
  const onSubmit = (data: any) => {
    try {
      update(id as unknown as number, data, callEndpoint);
    } catch (error) {
      //logger
      console.log(error);
    }
  };

  if (product == null) return <h1>El producto no existe</h1>;
  return <ProductsCardForm onSubmit={onSubmit} product={product} />;
};
