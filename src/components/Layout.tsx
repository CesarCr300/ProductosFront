import { ProtectedRoute } from "../routes/ProtectedRoute";
import { Container } from "@mui/system";
import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import { Sidebar } from "./Sidebar/Sidebar";

export const Layout = () => {
  return (
    <ProtectedRoute>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Container
          sx={{
            // margin: "0px",
            marginTop: "20px",
            padding: {
              ms: "0px",
              xs: "0px 10px",
            },
          }}
        >
          <Toolbar sx={{ display: { sm: "none" } }} />
          <Outlet />
        </Container>
      </Box>
    </ProtectedRoute>
  );
};
