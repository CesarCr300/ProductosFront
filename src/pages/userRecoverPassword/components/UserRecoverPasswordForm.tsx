import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { Button } from "../../../components/Button";
import { FormContainer } from "../../../components/Form/FormContainer";
import { recoverPassword } from "../application/userRecoverPassword";
import { UserRecoverPasswordModel } from "../models/user-recover-password.model";
import { userRecoverPasswordFields } from "../userRecoverPassword.fields";
import { Box, Typography } from "@mui/material";

export const UserRecoverPasswordForm = () => {
  const [searchParams] = useSearchParams();
  const [, setLoading] = useState(false);
  const navigate = useNavigate();
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<UserRecoverPasswordModel>({ mode: "onChange" });

  const onSubmit = (data: UserRecoverPasswordModel) => {
    try {
      recoverPassword(
        searchParams.get("token") as string,
        data,
        callEndpoint,
        navigate
      );
    } catch (error) {
      //
    }
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
        textAlign={"left"}
        sx={{ fontWeight: "bold", fontSize: "20px" }}
      >
        Restablecer contraseña
      </Typography>
      <FormContainer
        fields={useMemo(() => userRecoverPasswordFields(register, watch), [])}
        onSubmit={handleSubmit(onSubmit)}
        errors={errors}
      >
        <Button text="Guardar" type="submit" />
      </FormContainer>
    </Box>
  );
};
