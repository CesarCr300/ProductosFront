import { productService } from "../../../services/products.service";
import {
  createPopUpQuestion,
  createPopUpSimple,
} from "../../../utils/pop-up.util";

export const fillRows = async (callEndpoint: any, setRows: any) => {
  const response = await callEndpoint(productService.getAll());
  setRows(response.data);
};

export const removeById = async (
  id: number,
  {
    callEndpoint,
    functionToDeleteFromTable,
  }: { callEndpoint: any; functionToDeleteFromTable: () => void }
) => {
  const continueWithRemove = await createPopUpQuestion(
    "¿Estás seguro de eliminar este producto?"
  );
  if (!continueWithRemove) return;
  await callEndpoint(productService.remove(id));
  createPopUpSimple("Producto eliminado con éxito");
  functionToDeleteFromTable();
};
