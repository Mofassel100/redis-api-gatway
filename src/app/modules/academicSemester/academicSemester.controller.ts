import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.insertIntoDB(req);
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
    const result = await AcademicSemesterService.getAllFromDB(req);
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
    const result = await AcademicSemesterService.getSingleDataFromDB(req);
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
    const result = await AcademicSemesterService.UpdateIntoDB(req);
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
    const result = await AcademicSemesterService.DeleteFromDB(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
export const AcademicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  getSingleDataFromDB,
  UpdateIntoDB,
  DeletedFromDb
};
