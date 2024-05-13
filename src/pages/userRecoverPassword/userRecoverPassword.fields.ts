import { UseFormWatch } from "react-hook-form";

import { IFormFieldRender } from "../../components/Form/FormFieldsRender";
import { UserRecoverPasswordModel } from "./models/user-recover-password.model";

export const userRecoverPasswordFields = (
  register: any,
  watch: UseFormWatch<UserRecoverPasswordModel>
): IFormFieldRender[] => {
  const respuesta: IFormFieldRender[] = [
    {
      label: "Contraseña",
      name: "password",
      type: "password",
      register,
      hasAsyncronousDefaultValue: false,
    },
    {
      label: "Confirmar contraseña",
      name: "confirmPassword",
      type: "password",
      register,
      hasAsyncronousDefaultValue: false,
      registerOptions: {
        validate: (val: string) => {
          if (watch("password") != val) {
            return "Las contraseñas deben de coincidir";
          }
        },
      },
    },
  ];
  return respuesta;
};
