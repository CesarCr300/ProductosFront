import { IFormFieldRender } from "../../components/Form/FormFieldsRender";

export const userForgotPasswordFields = (register: any): IFormFieldRender[] => {
  const respuesta: IFormFieldRender[] = [
    {
      label: "Correo o nombre de usuario",
      name: "emailOrUsername",
      type: "text",
      register,
      hasAsyncronousDefaultValue: false,
    },
  ];
  return respuesta;
};
