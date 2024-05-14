import { useContext, useEffect, useMemo, useState } from "react";

import { Table } from "../../../components/table/Table";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { ProductsContext } from "../context/ProductsContext";
import { getColumns } from "../products.columns";
import { fillRows, removeById } from "../application/products.application";

export const ProductsTable = () => {
  const { setLoading } = useContext(ProductsContext);
  const [rows, setRows] = useState([]);
  const { callEndpoint } = useFetchAndLoad(setLoading);

  useEffect(() => {
    fillRows(callEndpoint, setRows);
  }, []);

  return (
    <Table
      columns={useMemo(() => getColumns(), [])}
      rows={rows}
      watchCardRoute={"/products/"}
      remove={removeById}
      removeParams={{ callEndpoint, setRows }}
    />
  );
};
