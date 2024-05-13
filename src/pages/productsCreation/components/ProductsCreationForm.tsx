import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { ProductsCardForm } from "../../../components/Products/ProductsCardForm/ProductsCardForm";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { create } from "../application/productsCreation.application";
import { ProductsCreationContext } from "../context/ProductsCreationContext";

export const ProductsCreationForm = () => {
  const { setLoading } = useContext(ProductsCreationContext);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    try {
      create(data, callEndpoint, navigate);
    } catch (error) {
      console.log(error);
    }
  };
  useNavigate();
  return (
    <div>
      <ProductsCardForm product={null} onSubmit={onSubmit} />
    </div>
  );
};
