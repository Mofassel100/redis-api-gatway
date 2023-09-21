import { Request } from 'express';

import { IGenericResponse } from '../../../interfaces/common';
import { corServiceUrl as HttpService } from '../../../shared/axios';

const insertIntoDB = async (req: Request) => {
  const response = await HttpService.post('/rooms/create', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpService.get('/rooms', {
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
  const response: IGenericResponse = await HttpService.get(`/rooms/${id}`);
  return response;
};
const UpdateIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await HttpService.patch(`/rooms/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const DeleteFromDB = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await HttpService.delete(`/rooms/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
export const RommService = {
  insertIntoDB,
  getAllFromDB,
  getSingleDataFromDB,
  UpdateIntoDB,
  DeleteFromDB
};
