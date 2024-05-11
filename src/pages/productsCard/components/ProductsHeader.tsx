import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ProductsHeader = () => {
  return (
    <Box className="" sx={{ marginBottom: "20px", marginTop: "20px" }}>
      <Link
        to="/products"
        style={{
          color: "black",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ArrowBackIcon />
        <Typography sx={{ fontSize: "20px" }}>Volver</Typography>
      </Link>
    </Box>
  );
};
