import { useForm } from "react-hook-form";

import { FormContainer } from "../../../components/Form/FormContainer";
import { ProductUpdate } from "../model/product-update.model";
import { ProductModel } from "../model/product.model";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { getById } from "../application/productsCard.application";

export const ProductsCardForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductModel | null>(null);
  const [loading, setLoading] = useState(false);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const { register } = useForm<ProductUpdate>();

  useEffect(() => {
    try {
      if (!id || isNaN(+id)) return;
      getById(id as unknown as number, callEndpoint, setProduct);
    } catch (error) {
      //
    }
  }, []);

  if (product == null) return <></>;

  return (
    <FormContainer
      fields={[
        {
          label: "Descripción",
          name: "description",
          type: "text",
          register,
          hasAsyncronousDefaultValue: false,
          defaultValue: product.description,
        },
        {
          label: "Stock",
          name: "stock",
          type: "number",
          register,
          defaultValue: product.stock,
          hasAsyncronousDefaultValue: false,
        },
        {
          label: "Peso en gramos",
          name: "weightInGrams",
          type: "number",
          register,
          defaultValue: product.weightInGrams,
          hasAsyncronousDefaultValue: false,
        },
        {
          label: "Precio",
          name: "price",
          type: "number",
          register,
          defaultValue: product.price,
          hasAsyncronousDefaultValue: false,
        },
        {
          label: "Precio de comparación",
          name: "comparePrice",
          type: "number",
          register,
          defaultValue: product.comparePrice,
          hasAsyncronousDefaultValue: false,
        },
      ]}
      onSubmit={() => {}}
    />
  );
};
