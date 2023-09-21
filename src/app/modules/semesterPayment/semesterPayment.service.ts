import { Request } from 'express';
import { corServiceUrl as HttpService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const gePayment = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/student-enrolled-course-payment', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const StudentSemesterPaymentService = {
  gePayment
};
