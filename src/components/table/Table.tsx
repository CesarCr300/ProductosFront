import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { TableActions } from "./TableActions";

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
    const isMobileSize = window.innerWidth <= 760;
    const actions: GridColDef = {
      field: "actions",
      headerName: "Acciones",
      flex: 1,
      minWidth: 100,
    };
    actions.renderCell = (params) => {
      return (
        <TableActions
          params={params}
          key={params.id}
          remove={remove}
          removeParams={removeParams}
          update={update}
          updateParams={updateParams}
          watchCardRoute={watchCardRoute}
        />
      );
    };
    // Add actions column to the beginning if mobile size, otherwise add it to the end
    if (isMobileSize) {
      setColumns([actions, ...columns]);
    } else {
      setColumns([...columns, actions]);
    }
  }, []);

  return (
    <DataGrid
      columns={columnsState}
      rows={rows}
      sx={{
        overflowX: "scroll",
        "& .MuiDataGrid-columnSeparator": { display: "none" },
      }}
      disableColumnMenu={true}
    />
  );
};
