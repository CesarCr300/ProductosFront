import { IFormFieldRender } from "../../../../components/Form/FormFieldsRender";
import { ProductModel } from "../../model/product.model";

export const productsCardFormFields = (
  register: any,
  product: ProductModel | null
): IFormFieldRender[] => {
  if (product == null) return [];
  return [
    {
      label: "Título",
      name: "title",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product.title,
      disabled: true,
    },
    {
      label: "Handle",
      name: "handle",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product.handle,
      disabled: true,
    },
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
    {
      label: "SKU",
      name: "sku",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product.sku,
      disabled: true,
    },
    {
      label: "Código de barras",
      name: "barcode",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product.barcode,
      disabled: true,
    },
  ];
};
