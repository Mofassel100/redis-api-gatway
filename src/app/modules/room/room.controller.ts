import { NextFunction, Request, Response } from 'express';
import { RommService } from './room.service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RommService.insertIntoDB(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RommService.getAllFromDB(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
const getSingleDataFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RommService.getSingleDataFromDB(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
const UpdateIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RommService.UpdateIntoDB(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
const DeletedFromDb = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await RommService.DeleteFromDB(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
export const RoomController = {
  insertIntoDB,
  getAllFromDB,
  getSingleDataFromDB,
  UpdateIntoDB,
  DeletedFromDb
};
