import { IGenericResponse } from '../../../interfaces/common';
import { Request } from 'express';
import { authServiceUrl } from '../../../shared/axios';

const loginUser = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await authServiceUrl.post('/auth/login', req.body);
  return response;
};
const refreshToken = async (req: Request): Promise<IGenericResponse> => {
  const { refreshToken } = req.cookies;
  const response: IGenericResponse = await authServiceUrl.post('/auth/refresh-token', req.body, {
    headers: {
      cookie: ` refreshToken=${refreshToken}`
    }
  });
  return response;
};
export const AuthService = {
  loginUser,
  refreshToken
};
