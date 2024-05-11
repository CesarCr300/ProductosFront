import { NavigateFunction } from "react-router-dom";

import { productService } from "../../../services/products.service";
import { fromProductCreateModelToProductCreateDto } from "../adapters/from-product-create-model-to-product-create-dto";
import { ProductCreate } from "../models/product-create.model";
import {
  createPopUpWithTimer,
} from "../../../utils/pop-up.util";

export const create = async (
  data: ProductCreate,
  callEndpoint: any,
  navigate: NavigateFunction
) => {
  const service = productService.create(
    fromProductCreateModelToProductCreateDto(data)
  );

  const response = await callEndpoint(service);
  await createPopUpWithTimer(
    "Producto creado",
    "El producto ha sido creado",
    "success",
    2000
  );
  navigate(`/products/${response.data.id}`);
};
