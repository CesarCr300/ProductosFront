import { Container } from "@mui/material";
import { useIsAuthenticated } from "../../hooks/useIsAuthenticated";
import { UserRecoverPasswordForm } from "./components/UserRecoverPasswordForm";

export const UserRecoverPassword = () => {
  useIsAuthenticated();
  return (
    <Container>
      <UserRecoverPasswordForm />
    </Container>
  );
};
