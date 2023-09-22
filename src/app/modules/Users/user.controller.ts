import { Request, Response, NextFunction } from 'express';
import { FildUploadCloud } from '../../../helpers/FildUploadHelper';
import { UserService } from './user.service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';
const createStudent = async (req: Request, res: Response, next: NextFunction) => {
  const result = await UserService.createStudent(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result
  });
};
export const UserController = {
  createStudent
};
