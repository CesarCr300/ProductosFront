import { useEffect, useMemo, useState } from "react";
import { Table } from "../../../components/table/Table";
import { getColumns } from "../products.columns";
import { fillRows } from "../application/products.application";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";

export const ProductsTable = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const { callEndpoint } = useFetchAndLoad(setLoading);

  useEffect(() => {
    fillRows(callEndpoint, setRows);
  }, []);

  return (
    <Table
      columns={useMemo(() => getColumns(), [])}
      rows={rows}
      watchCardRoute={"/products/"}
    />
  );
};
