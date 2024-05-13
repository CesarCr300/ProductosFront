import { AxiosInstanceSingletone } from "../../../services/api.service";
import { abortController } from "../../../utils/abort-controller.util";
import { IUserRecoverPasswordDto } from "../dtos/user-recover-password.dto";

class UserRecoverPasswordService {
  public async recover(token: string, data: IUserRecoverPasswordDto) {
    const controller = abortController();
    const apiInstance = AxiosInstanceSingletone.getInstance();
    return {
      call: apiInstance.post("/users/recover-password", data, {
        signal: controller.signal,
        headers: {
          Authorization: "Bearer " + token,
        },
      }),
      controller,
    };
  }
}

export const userRecoverPasswordService = new UserRecoverPasswordService();
