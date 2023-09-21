import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { BuildingService } from './building..service';
import sendResponse from '../../../shared/response';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await BuildingService.insertIntoDB(req);
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
    const result = await BuildingService.getAllFromDB(req);
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
    const result = await BuildingService.getSingleDataFromDB(req);
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
    const result = await BuildingService.UpdateIntoDB(req);
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
    const result = await BuildingService.DeleteFromDB(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
export const BuildingController = {
  insertIntoDB,
  getAllFromDB,
  getSingleDataFromDB,
  UpdateIntoDB,
  DeletedFromDb
};
