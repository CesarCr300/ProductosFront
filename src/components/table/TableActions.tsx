import { Link } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useRef } from "react";

export const TableActions = ({
  params,
  update,
  remove,
  updateParams,
  removeParams,
  watchCardRoute,
}: {
  params: any;
  update?: (id: number, params: any) => void;
  remove?: (id: number, params: any) => void;
  updateParams?: any;
  removeParams?: any;
  watchCardRoute?: string;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  return (
    <div ref={ref} style={{ display: "flex", gap: "8px" }}>
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
          <EditIcon onClick={() => update(params.id as number, updateParams)} />
        </>
      )}
      //The functionToDeleteFromTable is being used in this case because in this
      case there are a lot of products, and its more effective to remove it this
      way instead of filtering the rows
      {remove && (
        <DeleteIcon
          onClick={() => {
            remove(params.id as number, {
              ...removeParams,
              functionToDeleteFromTable: () => {
                ref.current?.parentElement?.parentElement?.remove();
              },
            });
          }}
        ></DeleteIcon>
      )}
    </div>
  );
};
