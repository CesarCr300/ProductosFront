import { IUserForgotPasswordDto } from "../dtos/user-forgot-password.dto";
import { UserForgotPasswordModel } from "../model/user-forgot-password.model";

export const fromUserForgotPasswordModelToDto = (
  data: UserForgotPasswordModel
): IUserForgotPasswordDto => {
  return {
    emailOrUsername: data.emailOrUsername,
  };
};
