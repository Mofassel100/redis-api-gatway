import { Request } from 'express';
import { corServiceUrl as HttpService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDB = async (req: Request) => {
  const response = await HttpService.post('/academic-faculty/create', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/academic-faculty', {
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
  const response: IGenericResponse = await HttpService.get(`/academic-faculty/${id}`);
  return response;
};
const UpdateIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await HttpService.patch(`/academic-faculty/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const DeleteFromDB = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await HttpService.delete(`/academic-faculty/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
export const AcademicFacultyService = {
  insertIntoDB,
  getAllFromDB,
  getSingleDataFromDB,
  UpdateIntoDB,
  DeleteFromDB
};
