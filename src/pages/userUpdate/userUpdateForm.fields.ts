import { IFormFieldRender } from "../../components/Form/FormFieldsRender";

export const userUpdateFormFields = (register: any): IFormFieldRender[] => {
  const respuesta: IFormFieldRender[] = [
    {
      label: "Antigua contraseña",
      name: "originalPassword",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
    },
    {
      label: "Nueva contraseña",
      name: "newPassword",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
    },
  ];
  return respuesta;
};
