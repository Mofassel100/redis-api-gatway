import { Request } from 'express';
import { corServiceUrl as HttpService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDB = async (req: Request) => {
  const response = await HttpService.post('/offered-course-section', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/offered-course-section', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getSingleDataFromDB = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  console.log(id);
  const response: IGenericResponse = await HttpService.get(`/offered-course-section/${id}`);
  return response;
};
const UpdateIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await HttpService.patch(
    `/offered-course-section/${id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};
const DeleteFromDB = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await HttpService.delete(`/offered-course-section/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
export const OfferedCourseSectionService = {
  insertIntoDB,
  getAllFromDB,
  getSingleDataFromDB,
  UpdateIntoDB,
  DeleteFromDB
};
