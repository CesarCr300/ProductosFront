import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface ITable {
  columns: GridColDef[];
  rows: any;
  update?: (id: number, params: any) => void;
  remove?: (id: number, params: any) => void;
  updateParams?: any;
  removeParams?: any;
}

export const Table = ({
  columns,
  rows,
  update = undefined,
  remove = undefined,
  updateParams = {},
  removeParams = {},
}: ITable) => {
  const [columnsState, setColumns] = useState(columns);
  useEffect(() => {
    if (!update && !remove) return;
    const actions: GridColDef = {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
    };
    actions.renderCell = (params) => {
      return (
        <div style={{ display: "flex", gap: "8px" }}>
          {update && (
            <>
              <EditIcon
                onClick={() => update(params.id as number, updateParams)}
              />
            </>
          )}
          {remove && (
            <DeleteIcon
              onClick={() => remove(params.id as number, removeParams)}
            ></DeleteIcon>
          )}
        </div>
      );
    };
    setColumns([...columns, actions]);
  }, []);

  return (
    <DataGrid columns={columnsState} rows={rows} sx={{ overflowX: "scroll" }} />
  );
};
