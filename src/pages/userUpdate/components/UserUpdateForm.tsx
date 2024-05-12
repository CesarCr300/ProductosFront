import { useContext, useMemo } from "react";
import { useForm } from "react-hook-form";

import { UserUpdateContext } from "../context/UserUpdateContext";
import useFetchAndLoad from "../../../hooks/useFetchAndLoad";
import { update } from "../application/userUpdate.application";
import { FormContainer } from "../../../components/Form/FormContainer";
import { UserUpdateModel } from "../models/user-update.model";
import { userUpdateFormFields } from "../userUpdateForm.fields";
import { Button } from "../../../components/Button";

export const UserUpdateForm = () => {
  const { setLoading } = useContext(UserUpdateContext);
  const { callEndpoint } = useFetchAndLoad(setLoading);
  const { handleSubmit, register } = useForm<UserUpdateModel>();

  const onSubmit = (data: UserUpdateModel) => {
    update(data, callEndpoint);
  };

  return (
    <FormContainer
      fields={useMemo(() => userUpdateFormFields(register), [])}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Button text="Guardar" type="submit" />
    </FormContainer>
  );
};
