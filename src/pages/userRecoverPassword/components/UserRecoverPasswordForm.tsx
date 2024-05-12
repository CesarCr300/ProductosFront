import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { Button } from "../../../components/Button";
import { FormContainer } from "../../../components/Form/FormContainer";
import { UserRecoverPasswordModel } from "../models/user-recover-password.model";
import { userRecoverPasswordFields } from "../userRecoverPassword.fields";

export const UserRecoverPasswordForm = () => {
  const [, setLoading] = useState(false);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const { handleSubmit, register } = useForm<UserRecoverPasswordModel>();

  const onSubmit = (data: UserRecoverPasswordModel) => {};

  return (
    <FormContainer
      fields={useMemo(() => userRecoverPasswordFields(register), [])}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Button text="Guardar" type="submit" />
    </FormContainer>
  );
};
