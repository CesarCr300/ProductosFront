import { IProductCreateDto } from "../dtos/products/product-create.dto";
import { IProductResponseManyDto } from "../dtos/products/product-response-many.dto";
import { IProductResponseDto } from "../dtos/products/product-response.dto";
import { IProductUpdateDto } from "../dtos/products/product-update.dto";
import { BaseRestService } from "./base.service";

class ProductService extends BaseRestService<
  IProductResponseDto,
  IProductResponseManyDto,
  IProductCreateDto,
  IProductUpdateDto
> {
  constructor() {
    super("/products");
  }
}

export const productService = new ProductService();
