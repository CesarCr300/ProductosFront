import { useForm } from "react-hook-form";
import { useMemo } from "react";

import { FormContainer } from "../../../../components/Form/FormContainer";
import { ProductUpdate } from "../../model/product-update.model";
import { ProductModel } from "../../model/product.model";
import { productsCardFormFields } from "./productsCardForm.fields";

interface IProductsCardForm {
  product: ProductModel | null;
  onSubmit: (data: any) => Promise<void> | void;
}

export const ProductsCardForm = ({
  product = null,
  onSubmit,
}: IProductsCardForm) => {
  const { register, handleSubmit } = useForm<ProductUpdate>();

  const fields = useMemo(
    () => productsCardFormFields(register, product),
    [product]
  );

  return (
    <FormContainer fields={fields} onSubmit={handleSubmit(onSubmit)}>
      <button type="submit">Guardar</button>
    </FormContainer>
  );
};
