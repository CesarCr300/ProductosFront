import { productService } from "../../../services/products.service";
import {
  createPopUpQuestion,
  createPopUpSimple,
} from "../../../utils/pop-up.util";
import { fromProductTableDtosToModels } from "../adapters/from-product-table-dto-to-model.adapter";

export const fillRows = async (callEndpoint: any, setRows: any) => {
  const response = await callEndpoint(productService.getAll());
  setRows(fromProductTableDtosToModels(response.data));
};

export const removeById = async (
  id: number,
  {
    callEndpoint,
    setRows,
  }: { callEndpoint: any; setRows: (prev: any) => React.Dispatch<any> }
) => {
  const continueWithRemove = await createPopUpQuestion(
    "¿Estás seguro de eliminar este producto?"
  );
  if (!continueWithRemove) return;
  await callEndpoint(productService.remove(id));
  createPopUpSimple("Producto eliminado con éxito");
  setRows((prev: any) => {
    const index = prev.findIndex((row: any) => row.id === id);
    const newArray = [...prev];
    newArray.splice(index, 1);
    return newArray;
  });
};
