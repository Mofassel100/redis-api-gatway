import { NextFunction, Request, Response } from 'express';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';

const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.insertIntoDB(req);
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
    const result = await AcademicFacultyService.getAllFromDB(req);
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
    const result = await AcademicFacultyService.getSingleDataFromDB(req);
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
    const result = await AcademicFacultyService.UpdateIntoDB(req);
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
    const result = await AcademicFacultyService.DeleteFromDB(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};
export const AcademicFacultyController = {
  insertIntoDB,
  getAllFromDB,
  getSingleDataFromDB,
  UpdateIntoDB,
  DeletedFromDb
};
