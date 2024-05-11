import { Action, ActionCreatorWithPayload, Dispatch } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

import { UserEntity } from "../../../entities/user.entity";
import { loginService } from "../services/login.service";
import { createLoginAdapter } from "../adapters/create-login.adapter";
import { AxiosCall } from "../../../entities/axios-call.entity";
import { AxiosResponse } from "axios";
import { createLoginResponseToUserAdapter } from "../adapters/create-login-response-to-user.adapter";
import { LoginResponse } from "../entities/login-response.entity";
import { defaultAuthenticatedUserRoute } from "../../../variables/routes.variables";

export const login = async (
  email: string,
  password: string,
  dispatch: Dispatch<Action>,
  loginReducer: ActionCreatorWithPayload<UserEntity>,
  navigate: NavigateFunction,
  callEndpoint: (
    axiosCall: AxiosCall<LoginResponse>
  ) => Promise<AxiosResponse<any, any>>
) => {
  const response = await callEndpoint(
    loginService(createLoginAdapter(email, password))
  );
  dispatch(loginReducer(createLoginResponseToUserAdapter(response.data)));
  navigate(defaultAuthenticatedUserRoute);
};
