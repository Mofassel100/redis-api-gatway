import { Request, Response } from 'express';
import { AdminService } from './admin.service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';
const getAdminIntoDB = async (req: Request, res: Response) => {
  const result = await AdminService.getAdminIntoDB(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result
  });
};
const getAdminSingleIntoDB = async (req: Request, res: Response) => {
  const result = await AdminService.getAdminSingleIntoDB(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result
  });
};
const UpdateAdmin = async (req: Request, res: Response) => {
  const result = await AdminService.UpdateAdmin(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    data: result
  });
};
export const AdminController = {
  getAdminIntoDB,
  getAdminSingleIntoDB,
  UpdateAdmin
};
