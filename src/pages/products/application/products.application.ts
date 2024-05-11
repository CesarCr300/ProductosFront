import { productService } from "../../../services/products.service";

export const fillRows = async (callEndpoint: any, setRows: any) => {
  const response = await callEndpoint(productService.getAll());
  setRows(response.data)
};
