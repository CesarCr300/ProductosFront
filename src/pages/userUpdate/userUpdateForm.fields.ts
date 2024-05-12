import { IFormFieldRender } from "../../components/Form/FormFieldsRender";

export const userUpdateFormFields = (register: any): IFormFieldRender[] => {
  const respuesta: IFormFieldRender[] = [
    {
      label: "Antigua contraseña",
      name: "originalPassword",
      type: "password",
      register,
      hasAsyncronousDefaultValue: false,
    },
    {
      label: "Nueva contraseña",
      name: "newPassword",
      type: "password",
      register,
      hasAsyncronousDefaultValue: false,
    },
  ];
  return respuesta;
};
