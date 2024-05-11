import { GridColDef } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

export const getColumns = (): GridColDef[] => {
  return [
    { field: "title", headerName: "Título", flex: 1 },
    { field: "price", headerName: "Precio", flex: 1 },
    { field: "stock", headerName: "Stock", flex: 1 },
    { field: "weightInGrams", headerName: "Peso (g)", flex: 1 },
    { field: "comparePrice", headerName: "Precio de comparación", flex: 1 },
    {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      renderCell: (params: any) => (
        <Link to={`/products/${params.id}`}>Ver</Link>
      ),
    },
  ];
};
