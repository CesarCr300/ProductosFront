import { LoginRequest } from "../entities/login-request.entity";

export const createLoginAdapter = (
  email: string,
  password: string
): LoginRequest => {
  return { email, password };
};
