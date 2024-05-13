import { Box } from "@mui/material";

import { UserForgotPasswordForm } from "./components/UserForgotPasswordForm";

export const UserForgotPassword = () => {
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
