import { Box } from "@mui/material";

import { UserForgotPasswordForm } from "./components/UserForgotPasswordForm";
import { useIsAuthenticated } from "../../hooks/useIsAuthenticated";

export const UserForgotPassword = () => {
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
      <UserForgotPasswordForm />
    </Box>
  );
};
