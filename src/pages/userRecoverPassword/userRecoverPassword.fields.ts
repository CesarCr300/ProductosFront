import { IFormFieldRender } from "../../components/Form/FormFieldsRender";

export const userRecoverPasswordFields = (
  register: any
): IFormFieldRender[] => {
  const respuesta: IFormFieldRender[] = [
    {
      label: "Contraseña",
      name: "originalPassword",
      type: "password",
      register,
      hasAsyncronousDefaultValue: false,
    },
    {
      label: "Confirmar contraseña",
      name: "newPassword",
      type: "password",
      register,
      hasAsyncronousDefaultValue: false,
    },
  ];
  return respuesta;
};
