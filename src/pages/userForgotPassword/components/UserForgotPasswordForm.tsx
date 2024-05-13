import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../../../components/Button";
import { FormContainer } from "../../../components/Form/FormContainer";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { userForgotPasswordFields } from "../userForgotPassword.fields";
import { UserForgotPasswordModel } from "../model/user-forgot-password.model";
import { sendLinkToResetPassword } from "../application/userForgotPassword.application";

export const UserForgotPasswordForm = () => {
  const [, setLoading] = useState(false);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const { register, handleSubmit } = useForm<UserForgotPasswordModel>();

  const onSubmit = async (data: UserForgotPasswordModel) => {
    await sendLinkToResetPassword(data, callEndpoint);
  };

  return (
    <FormContainer
      fields={useMemo(() => userForgotPasswordFields(register), [])}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Button text="Enviar" type="submit" />
    </FormContainer>
  );
};
