import { IProductTableDto } from "../dtos/product-table-dto";
import { ProductTableModel } from "../models/product-table-model";

const fromProductTableDtoToModel = (
  dto: IProductTableDto
): ProductTableModel => ({
  id: dto.id,
  title: dto.title,
  stock: dto.stock,
  weightInGrams: dto.weightInGrams,
  price: dto.price,
  comparePrice: dto.comparePrice,
});

export const fromProductTableDtosToModels = (
  dtos: IProductTableDto[]
): ProductTableModel[] => dtos.map(fromProductTableDtoToModel);
