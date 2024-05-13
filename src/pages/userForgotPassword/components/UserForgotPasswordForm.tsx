import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../../../components/Button";
import { FormContainer } from "../../../components/Form/FormContainer";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { userForgotPasswordFields } from "../userForgotPassword.fields";
import { UserForgotPasswordModel } from "../model/user-forgot-password.model";
import { sendLinkToResetPassword } from "../application/userForgotPassword.application";
import { Box, Typography } from "@mui/material";

export const UserForgotPasswordForm = () => {
  const [, setLoading] = useState(false);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const { register, handleSubmit } = useForm<UserForgotPasswordModel>();

  const onSubmit = async (data: UserForgotPasswordModel) => {
    await sendLinkToResetPassword(data, callEndpoint);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      minWidth="300px"
      sx={{
        borderRadius: "8px",
        padding: "40px 20px",
        backgroundColor: "white",
      }}
      boxShadow={10}
    >
      <Typography
        component="h1"
        variant="caption"
        textAlign={"left"}
        sx={{ fontWeight: "bold" }}
      >
        Olvide mi contraseña
      </Typography>
      <FormContainer
        fields={useMemo(() => userForgotPasswordFields(register), [])}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Button text="Enviar correo de recuperación" type="submit" />
      </FormContainer>
    </Box>
  );
};
