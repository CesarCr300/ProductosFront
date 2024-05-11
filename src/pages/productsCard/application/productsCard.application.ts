import { productService } from "../../../services/products.service";
import {
  createPopUpQuestion,
  createPopUpWithIcon,
} from "../../../utils/pop-up.util";
import { fromProductResponseToProductModelAdapter } from "../adapters/from-product-response-to-product-model.adapter";
import { ProductUpdate } from "../model/product-update.model";
import { ProductModel } from "../model/product.model";

export const getById = async (
  id: number,
  callEndpoint: any,
  setProduct: React.Dispatch<React.SetStateAction<ProductModel | null>>
) => {
  const response = await callEndpoint(productService.getById(id));
  setProduct(fromProductResponseToProductModelAdapter(response.data));
};

export const update = async (
  id: number,
  product: ProductUpdate,
  callEndpoint: any
) => {
  const continueWithOperation = await createPopUpQuestion(
    "¿Estas seguro de actualizar el producto?"
  );
  if (!continueWithOperation) return;

  const service = productService.update(id, product);

  await callEndpoint(service);

  createPopUpWithIcon(
    "Producto actualizado",
    "El producto ha sido actualizado",
    "success"
  );
};
