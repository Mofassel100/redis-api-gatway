import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import httpStatus from 'http-status';
import { StudentSemesterPaymentService } from './semesterPayment.service';

const getPayment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentSemesterPaymentService.gePayment(req);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      data: result
    });
  } catch (err) {
    next(err);
  }
};

export const StudentSemesterPaymentController = {
  getPayment
};
