import { useEffect, useState } from "react";
import { ProductModel } from "../model/product.model";
import { getById } from "../application/productsCard.application";

export const useProductModelState = (
  id: string | undefined,
  callEndpoint: any
) => {
  const [product, setProduct] = useState<ProductModel | null>(null);

  useEffect(() => {
    try {
      if (!id || isNaN(+id)) return;
      getById(id as unknown as number, callEndpoint, setProduct);
    } catch (error) {
      //
    }
  }, [id]);

  return { product };
};
