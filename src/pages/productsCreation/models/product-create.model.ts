export interface ProductCreate {
  handle: string;
  title: string;
  description: string;
  stock: number;
  weightInGrams: number;
  sku: string;
  barcode: string;
  price: number;
  comparePrice: number;
}
