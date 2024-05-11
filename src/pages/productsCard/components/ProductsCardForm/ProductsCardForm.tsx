import { useForm } from "react-hook-form";

import { FormContainer } from "../../../../components/Form/FormContainer";
import { ProductUpdate } from "../../model/product-update.model";
import { useParams } from "react-router-dom";
import { useContext, useMemo } from "react";
import useFetchAndLoad from "../../../../hooks/useFetchAndLoad";
import { update } from "../../application/productsCard.application";
import { productsCardFormFields } from "./productsCardForm.fields";
import { useProductModelState } from "../../hooks/useProductModelState";
import { ProductsCardContext } from "../../context/ProductsCard.context";

export const ProductsCardForm = () => {
  const { id } = useParams();
  const { setLoading } = useContext(ProductsCardContext);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const { product } = useProductModelState(id, callEndpoint);
  const { register, handleSubmit } = useForm<ProductUpdate>();

  const onSubmit = (data: any) => {
    update(id as unknown as number, data, callEndpoint);
  };

  const fields = useMemo(
    () => productsCardFormFields(register, product),
    [product]
  );

  if (product == null) return <></>;

  return (
    <FormContainer fields={fields} onSubmit={handleSubmit(onSubmit)}>
      <button type="submit">Guardar</button>
    </FormContainer>
  );
};
