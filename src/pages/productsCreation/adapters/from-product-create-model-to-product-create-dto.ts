import { IProductCreateDto } from "../../../dtos/products/product-create.dto";
import { ProductCreate } from "../models/product-create.model";

export const fromProductCreateModelToProductCreateDto = (
  product: ProductCreate
): IProductCreateDto => {
  return {
    description: product.description,
    price: product.price,
    stock: product.stock,
    handle: product.handle,
    title: product.title,
    weightInGrams: product.weightInGrams,
    sku: product.sku,
    barcode: product.barcode,
    comparePrice: product.comparePrice,
  };
};
