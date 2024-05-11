import { IProductResponseDto } from "../../../dtos/products/product-response.dto";
import { ProductModel } from "../model/product.model";

export const fromProductResponseToProductModelAdapter = (
  productResponse: IProductResponseDto
): ProductModel => {
  return {
    id: productResponse.id,
    handle: productResponse.handle,
    title: productResponse.title,
    description: productResponse.description,
    stock: productResponse.stock,
    weightInGrams: productResponse.weightInGrams,
    sku: productResponse.sku,
    barcode: productResponse.barcode,
    price: productResponse.price,
    comparePrice: productResponse.comparePrice,
  };
};
