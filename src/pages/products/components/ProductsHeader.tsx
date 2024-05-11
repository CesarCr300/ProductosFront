import Box from "@mui/material/Box";
import { Button } from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export const ProductsHeader = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <h1 style={{ margin: "0px" }}>Productos</h1>
      </div>
      <div>
        <Button
          handleClick={() => {
            navigate("/products/create");
          }}
          text="Crear"
        />
      </div>
    </Box>
  );
};
