import { NavigateFunction } from "react-router-dom";
import { fromUserRecoverPasswordModelToDtoAdapter } from "../adapters/from-user-recover-password-model-to-user-recover-password-dto.adapter";
import { UserRecoverPasswordModel } from "../models/user-recover-password.model";
import { userRecoverPasswordService } from "../services/userRecoverPassword.service";
import { defaultUnauthenticatedUserRoute } from "../../../variables/routes.variables";
import { createPopUpWithTimer } from "../../../utils/pop-up.util";

export const recoverPassword = async (
  token: string,
  data: UserRecoverPasswordModel,
  callEndpoint: any,
  navigate: NavigateFunction
) => {
  const service = userRecoverPasswordService.recover(
    token,
    fromUserRecoverPasswordModelToDtoAdapter(data)
  );
  await callEndpoint(service);
  await createPopUpWithTimer(
    "Contraseña actualizada correctamente",
    "",
    "success",
    2000
  );
  navigate(defaultUnauthenticatedUserRoute);
};
