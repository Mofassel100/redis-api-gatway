import { NextFunction, Request, Response } from 'express';
import { FacultyService } from './faculty.service';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';

const UpdateFaculy = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await FacultyService.UpdateFaculy(req);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'UPdate Faculty SuccessFully',
      data: response
    });
  } catch (error) {
    next(error);
  }
};
const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await FacultyService.getFacultyFromDB(req);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'get Faculty SuccessFully',
      data: response
    });
  } catch (error) {
    next(error);
  }
};
const getSingleDataFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await FacultyService.getSingleFacultyFromDB(req);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'signle data Faculty SuccessFully',
      data: response
    });
  } catch (error) {
    next(error);
  }
};
const deleteFacultyFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await FacultyService.deleteFacultyFromDB(req);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'delete from SuccessFully',
      data: response
    });
  } catch (error) {
    next(error);
  }
};
export const FacultyController = {
  UpdateFaculy,
  getAllFromDB,
  getSingleDataFromDB,
  deleteFacultyFromDB
};
