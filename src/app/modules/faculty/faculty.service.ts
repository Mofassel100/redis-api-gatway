import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { authServiceUrl } from '../../../shared/axios';

const UpdateFaculy = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await authServiceUrl.patch(`/facultys/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getFacultyFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await authServiceUrl.get(`/facultys/`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getSingleFacultyFromDB = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await authServiceUrl.get(`/facultys/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const deleteFacultyFromDB = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await authServiceUrl.delete(`/facultys/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
export const FacultyService = {
  UpdateFaculy,
  getFacultyFromDB,
  getSingleFacultyFromDB,
  deleteFacultyFromDB
};
