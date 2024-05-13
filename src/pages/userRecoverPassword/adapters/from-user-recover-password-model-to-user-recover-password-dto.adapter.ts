import { IUserRecoverPasswordDto } from "../dtos/user-recover-password.dto";
import { UserRecoverPasswordModel } from "../models/user-recover-password.model";

export const fromUserRecoverPasswordModelToDtoAdapter = (
  data: UserRecoverPasswordModel
): IUserRecoverPasswordDto => {
  return {
    password: data.password,
  };
};
