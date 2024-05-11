import { useState } from "react";
import { ProductsCardForm } from "../../../components/Products/ProductsCardForm/ProductsCardForm";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { create } from "../application/productsCreation.application";
import { useNavigate } from "react-router-dom";

export const ProductsCreationForm = () => {
  const [loading, setLoading] = useState(false);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    create(data, callEndpoint, navigate);
  };
  useNavigate();
  return (
    <div>
      <ProductsCardForm product={null} onSubmit={onSubmit} />
    </div>
  );
};
