import { Box } from "@mui/material";

import { LoginForm } from "./components/LoginForm";
import { LoginContext } from "./context/login.context";
import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { useUserSelector } from "../../redux/user.hooks";
import { useNavigate } from "react-router-dom";
import { defaultAuthenticatedUserRoute } from "../../variables/routes.variables";

export const Login = () => {
  const navigate = useNavigate();
  const state = useUserSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (state.isAuthenticated) {
      return navigate(defaultAuthenticatedUserRoute);
    }
  }, [state]);

  return (
    <LoginContext.Provider value={{ loading, setLoading }}>
      {loading && <Loading />}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ backgroundColor: "#EEF2F5" }}
      >
        <LoginForm />
      </Box>
    </LoginContext.Provider>
  );
};
