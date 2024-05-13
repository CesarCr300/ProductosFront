import { IFormFieldRender } from "../../Form/FormFieldsRender";
import { ProductModel } from "../../../pages/productsCard/model/product.model";

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
      registerOptions: {
        required: product == null && "El título es requerido",
      },
    },
    {
      label: "Handle",
      name: "handle",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      disabled: product != null,
      defaultValue: product?.handle,
      registerOptions: {
        required: product == null && "El handle es requerido",
      },
    },
    {
      label: "Stock",
      name: "stock",
      type: "number",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.stock,
      registerOptions: {
        required: "El stock es requerido",
      },
    },
    {
      label: "Peso en gramos",
      name: "weightInGrams",
      type: "number",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.weightInGrams,
      registerOptions: {
        required: "El peso es requerido",
      },
    },
    {
      label: "Precio",
      name: "price",
      type: "number",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.price,
      registerOptions: {
        required: "El precio es requerido",
      },
    },
    {
      label: "Precio de comparación",
      name: "comparePrice",
      type: "number",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.comparePrice,
      registerOptions: {
        required: "El precio de comparación es requerido",
      },
    },
    {
      label: "SKU",
      name: "sku",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.sku,
      disabled: product != null,
      registerOptions: {
        required: product == null && "El SKU es requerido",
      },
    },
    {
      label: "Código de barras",
      name: "barcode",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
      defaultValue: product?.barcode,
      disabled: product != null,
      registerOptions: {
        required: product == null && "El código de barras es requerido",
      },
    },
  ];
  return respuesta;
};
