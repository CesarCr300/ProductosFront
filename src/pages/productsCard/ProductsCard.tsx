import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getById } from "./application/productsCard.application";
import useFetchAndLoad from "../../hooks/useFetchAndLoad";
import { ProductModel } from "./model/product.model";

export const ProductsCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductModel | null>(null);
  const [loading, setLoading] = useState(false);
  const { callEndpoint } = useFetchAndLoad(setLoading);

  useEffect(() => {
    try {
      if (!id || isNaN(+id)) return;
      getById(id as unknown as number, callEndpoint, setProduct);
    } catch (error) {
      //
    }
  }, []);

  return (
    <div>
      {!loading && !product && <h1>Producto no encontrado</h1>}
      {product && (
        <div>
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <p>{product.stock}</p>
          <p>{product.weightInGrams}</p>
          <p>{product.comparePrice}</p>
        </div>
      )}
    </div>
  );
};
