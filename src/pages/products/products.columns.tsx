import { Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";

export const getColumns = (): GridColDef[] => {
  return [
    {
      field: "title",
      headerName: "Título",
      flex: 1,
      minWidth: 100,
    },
    { field: "price", headerName: "Precio", flex: 1, minWidth: 90 },
    { field: "stock", headerName: "Stock", flex: 0.75, minWidth: 60 },
    { field: "weightInGrams", headerName: "Peso (g)", flex: 1, minWidth: 100 },
    {
      field: "comparePrice",
      headerName: "Precio de comparación",
      flex: 1,
      minWidth: 100,
    },
  ];
};
