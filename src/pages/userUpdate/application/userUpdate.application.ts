import { userService } from "../../../services/user.service";
import {
  createPopUpQuestion,
  createPopUpSimple,
} from "../../../utils/pop-up.util";
import { UserUpdateModel } from "../models/user-update.model";

export const update = async (data: UserUpdateModel, callEndpoint: any) => {
  const continueWithRemove = await createPopUpQuestion(
    "¿Estás seguro de actualizar tu contraseña?"
  );
  if (!continueWithRemove) return;
  const service = userService.updatePassword(data);
  await callEndpoint(service);
  createPopUpSimple("Contraseña actualizada con éxito");
};
