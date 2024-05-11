import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

interface ITable {
  columns: GridColDef[];
  rows: any;
  update?: (id: number, params: any) => void;
  remove?: (id: number, params: any) => void;
  updateParams?: any;
  removeParams?: any;
  watchCardRoute?: string;
}

export const Table = ({
  columns,
  rows,
  update = undefined,
  remove = undefined,
  updateParams = {},
  removeParams = {},
  watchCardRoute = undefined,
}: ITable) => {
  const [columnsState, setColumns] = useState(columns);
  useEffect(() => {
    if (!update && !remove && !watchCardRoute) return;
    const actions: GridColDef = {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
    };
    actions.renderCell = (params) => {
      return (
        <div style={{ display: "flex", gap: "8px" }}>
          {watchCardRoute && (
            <Link
              style={{ color: "black" }}
              to={
                (watchCardRoute?.endsWith("/")
                  ? watchCardRoute
                  : watchCardRoute + "/") + params.id
              }
            >
              <VisibilityIcon></VisibilityIcon>
            </Link>
          )}
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
