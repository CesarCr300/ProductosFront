import { AxiosCall } from "../../../entities/axios-call.entity";
import { AxiosInstanceSingletone } from "../../../services/api.service";
import { LoginRequest } from "../entities/login-request.entity";
import { LoginResponse } from "../entities/login-response.entity";

export const loginService = (
  request: LoginRequest
): AxiosCall<LoginResponse> => {
  const controller = new AbortController();
  const response = AxiosInstanceSingletone.getInstance().post<LoginResponse>(
    "auth/login",
    request,
    {
      signal: controller.signal,
    }
  );
  return {
    call: response,
    controller,
  };
};
