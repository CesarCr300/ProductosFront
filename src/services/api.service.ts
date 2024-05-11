import axios, { AxiosHeaders, AxiosInstance } from "axios";
import { createPopUpWithIcon } from "../utils/pop-up.util";
import { createAuthString } from "../utils/auth.util";

export class AxiosInstanceSingletone {
  private static axiosInstance: AxiosInstance;
  private constructor() {}

  static getInstance() {
    if (!AxiosInstanceSingletone.axiosInstance) {
      const user = localStorage.getItem("user");
      const token = user ? JSON.parse(user).token : null;
      const headers: Partial<AxiosHeaders> = {
        "Content-Type": "application/json",
        accept: "*/*",
      };
      if (token != null) {
        headers.Authorization = createAuthString(token);
      }
      AxiosInstanceSingletone.axiosInstance = axios.create({
        baseURL: "http://localhost:3000/",
        headers,
      });
      AxiosInstanceSingletone.axiosInstance.interceptors.response.use(
        (response) => {
          return response.data;
        },
        (error) => {
          //If any request is aborted
          if (error.code == "ERR_CANCELED") {
            return Promise.reject();
          }
          if (error.response?.status === 401) {
            //logout
          }
          const message = error?.response?.data?.message
            ? error?.response?.data?.message
            : error?.response?.message || "Hubo un error inesperado";
          createPopUpWithIcon("Error", message, "error");
          return Promise.reject(message);
        }
      );
    }
    return AxiosInstanceSingletone.axiosInstance;
  }

  static setNewToken(token: string) {
    AxiosInstanceSingletone.axiosInstance.defaults.headers.common[
      "Authorization"
    ] = createAuthString(token);
  }
}
