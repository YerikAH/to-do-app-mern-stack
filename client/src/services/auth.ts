/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from "axios";
import {
  LoginBody,
  RegisterBody,
  RegisterResponse,
  ErrorResponse,
} from "../types/types";
const BASE_URL = import.meta.env.VITE_BASE_URL_SERVER;

export const authApi = {
  registerApi: async (
    body: RegisterBody
  ): Promise<RegisterResponse | ErrorResponse> => {
    try {
      const response = await axios.post<RegisterResponse | ErrorResponse>(
        `${BASE_URL}register`,
        body
      );
      console.log("Te registraste correctamentes");
      return response.data;
    } catch (err: any) {
      const error = err.response as AxiosResponse;
      const errorObj = {
        message: error.data.error,
        statusCode: error.status,
        statusText: error.statusText,
      };
      return errorObj;
    }
  },
  loginApi: async (body: LoginBody) => {
    try {
      const response = await axios.post(`${BASE_URL}login`, body);
      console.log("Te logueaste correctamente");
      return response.data;
    } catch (err: any) {
      const error = err.response as AxiosResponse;
      const errorObj = {
        message: error.data.error,
        statusCode: error.status,
        statusText: error.statusText,
      };
      return errorObj;
    }
  },
  logoutApi: async () => {
    try {
      const response = await axios.post(`${BASE_URL}logout`);
      return response.data;
    } catch (err: any) {
      const error = err.response as AxiosResponse;
      const errorObj = {
        message: error.data.error,
        statusCode: error.status,
        statusText: error.statusText,
      };
      return errorObj;
    }
  },
};
