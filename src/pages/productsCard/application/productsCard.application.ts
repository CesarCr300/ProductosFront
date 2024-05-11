import { productService } from "../../../services/products.service";
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
  await callEndpoint(productService.update(id, product));
};
