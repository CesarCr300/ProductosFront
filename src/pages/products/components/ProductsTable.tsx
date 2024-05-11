import { useMemo, useState } from "react";
import { Table } from "../../../components/table/Table";
import { getColumns } from "../products.columns";

export const ProductsTable = () => {
  const [rows, setRows] = useState([]);

  return <Table columns={useMemo(() => getColumns(), [])} rows={rows} />;
};
