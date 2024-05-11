import { UserEntity } from "../../../entities/user.entity";
import { LoginResponse } from "../entities/login-response.entity";

export const createLoginResponseToUserAdapter = (
  response: LoginResponse
): UserEntity => {
  return {
    email: response.email,
    name: response.name,
    lastName: response.lastName,
    token: response.access_token,
  };
};
