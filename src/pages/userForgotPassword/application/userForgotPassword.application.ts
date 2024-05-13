import { createPopUpWithTimer } from "../../../utils/pop-up.util";
import { fromUserForgotPasswordModelToDto } from "../adapters/from-user-forgot-password-model-to-dto.adapter";
import { UserForgotPasswordModel } from "../model/user-forgot-password.model";
import { userForgotPasswordService } from "../service/userForgotPassword.service";

export const sendLinkToResetPassword = async (
  data: UserForgotPasswordModel,
  callEndpoint: any
) => {
  const response = await callEndpoint(
    userForgotPasswordService.sendLink(fromUserForgotPasswordModelToDto(data))
  );
  if (response?.statusCode != 200) return;
  createPopUpWithTimer(
    "Operación exitosa",
    "Si el usuario ingresado se encuentra registrado, se le enviará un correo con un link para restablecer su contraseña.",
    "success",
    4000
  );
};
