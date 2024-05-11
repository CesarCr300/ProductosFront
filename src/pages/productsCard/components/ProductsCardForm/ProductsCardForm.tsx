import { useForm } from "react-hook-form";

import { FormContainer } from "../../../../components/Form/FormContainer";
import { ProductUpdate } from "../../model/product-update.model";
import { ProductModel } from "../../model/product.model";
import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import useFetchAndLoad from "../../../../hooks/useFetchAndLoad";
import { getById, update } from "../../application/productsCard.application";
import { productsCardFormFields } from "./productsCardForm.fields";

export const ProductsCardForm = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductModel | null>(null);
  const [loading, setLoading] = useState(false);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const { register, handleSubmit } = useForm<ProductUpdate>();

  const onSubmit = (data: any) => {
    update(id as unknown as number, data, callEndpoint);
  };

  const fields = useMemo(
    () => productsCardFormFields(register, product),
    [product]
  );

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
    <FormContainer fields={fields} onSubmit={handleSubmit(onSubmit)}>
      <button type="submit">Guardar</button>
    </FormContainer>
  );
};
