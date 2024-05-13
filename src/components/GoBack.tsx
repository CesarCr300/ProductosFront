import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface IGoBack {
  to: string;
  fontSize?: string;
}

export const GoBack = ({ to, fontSize = "20px" }: IGoBack) => {
  return (
    <Link
      to={to}
      style={{
        color: "black",
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ArrowBackIcon />
      <Typography sx={{ fontSize }}>Volver</Typography>
    </Link>
  );
};
