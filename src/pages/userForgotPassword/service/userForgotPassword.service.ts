import { AxiosInstanceSingletone } from "../../../services/api.service";
import { abortController } from "../../../utils/abort-controller.util";
import { IUserForgotPasswordDto } from "../dtos/user-forgot-password.dto";

class UserForgotPasswordService {
  public sendLink(data: IUserForgotPasswordDto) {
    const controller = abortController();
    const apiInstance = AxiosInstanceSingletone.getInstance();
    return {
      call: apiInstance.get(
        "/users/link-to-reset-password?emailOrUsername=" + data.emailOrUsername,
        {
          signal: controller.signal,
        }
      ),
      controller,
    };
  }
}

export const userForgotPasswordService = new UserForgotPasswordService();
