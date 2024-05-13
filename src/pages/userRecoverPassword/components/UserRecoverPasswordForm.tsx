import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { Button } from "../../../components/Button";
import { FormContainer } from "../../../components/Form/FormContainer";
import { recoverPassword } from "../application/userRecoverPassword";
import { UserRecoverPasswordModel } from "../models/user-recover-password.model";
import { userRecoverPasswordFields } from "../userRecoverPassword.fields";

export const UserRecoverPasswordForm = () => {
  const [searchParams] = useSearchParams();
  const [, setLoading] = useState(false);
  const navigate = useNavigate();
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const { handleSubmit, register } = useForm<UserRecoverPasswordModel>();

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
    <FormContainer
      fields={useMemo(() => userRecoverPasswordFields(register), [])}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Button text="Guardar" type="submit" />
    </FormContainer>
  );
};
