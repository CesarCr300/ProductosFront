import { IFormFieldRender } from "../../../../components/Form/FormFieldsRender";
import { ProductModel } from "../../model/product.model";

export const productsCardFormFields = (
  register: any,
  product: ProductModel | null
): IFormFieldRender[] => {
  const respuesta: IFormFieldRender[] = [
    {
      label: "Título",
      name: "title",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      disabled: product != null,
      defaultValue: product?.title,
    },
    {
      label: "Handle",
      name: "handle",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      disabled: product != null,
      defaultValue: product?.handle,
    },
    {
      label: "Descripción",
      name: "description",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.description,
    },
    {
      label: "Stock",
      name: "stock",
      type: "number",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.stock,
    },
    {
      label: "Peso en gramos",
      name: "weightInGrams",
      type: "number",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.weightInGrams,
    },
    {
      label: "Precio",
      name: "price",
      type: "number",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.price,
    },
    {
      label: "Precio de comparación",
      name: "comparePrice",
      type: "number",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.comparePrice,
    },
    {
      label: "SKU",
      name: "sku",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.sku,
      disabled: product != null,
    },
    {
      label: "Código de barras",
      name: "barcode",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.barcode,
      disabled: product != null,
    },
  ];
  return respuesta;
};
