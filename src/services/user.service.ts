import { IUserUpdateDto } from "../dtos/user/user-update.dto";
import { abortController } from "../utils/abort-controller.util";
import { AxiosInstanceSingletone } from "./api.service";

class UserService {
  private readonly _axiosInstance = AxiosInstanceSingletone.getInstance();
  private readonly resourceUrl: string = "users/";

  updatePassword(body: IUserUpdateDto) {
    const controller = abortController();
    return {
      call: this._axiosInstance.patch<IUserUpdateDto>(
        this.resourceUrl + "update-password",
        body,
        {
          signal: controller.signal,
        }
      ),
      controller,
    };
  }
}

export const userService = new UserService();
