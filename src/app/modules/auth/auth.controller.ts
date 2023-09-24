import { NextFunction, Request, Response } from 'express';
import { AuthService } from './auth.service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';
import config from '../../../config';

const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await AuthService.loginUser(req);
    const { refreshToken, ...others } = response.data;
    const cookieOptions = { secure: config.env === 'production', httpOnly: true };
    res.cookie('refreshToken', response.data.refreshToken, cookieOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'sign in',
      data: others
    });
  } catch (error) {
    next(error);
  }
};
const refreshToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await AuthService.refreshToken(req);
    const { refreshToken, ...others } = response.data;
    const cookieOptions = { secure: config.env === 'production', httpOnly: true };
    res.cookie('refreshToken', response.data.refreshToken, cookieOptions);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Ref sign in',
      data: others
    });
  } catch (error) {
    next(error);
  }
};
export const AuthController = {
  loginUser,
  refreshToken
};
