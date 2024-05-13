import { Box } from "@mui/material";
import { useIsAuthenticated } from "../../hooks/useIsAuthenticated";
import { UserRecoverPasswordForm } from "./components/UserRecoverPasswordForm";

export const UserRecoverPassword = () => {
  useIsAuthenticated();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ backgroundColor: "#EEF2F5" }}
    >
      <UserRecoverPasswordForm />
    </Box>
  );
};
