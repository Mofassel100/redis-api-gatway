import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { authServiceUrl } from '../../../shared/axios';

const getAdminIntoDB = async (req: Request) => {
  const respose: IGenericResponse = await authServiceUrl.get('/admins', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return respose;
};
const getAdminSingleIntoDB = async (req: Request) => {
  const id = req.params.id;
  const respose: IGenericResponse = await authServiceUrl.get(`/admins/${id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return respose;
};
const UpdateAdmin = async (req: Request) => {
  const id = req.params.id;
  const respose: IGenericResponse = await authServiceUrl.patch(`/admins/${id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return respose;
};
export const AdminService = {
  getAdminIntoDB,
  getAdminSingleIntoDB,
  UpdateAdmin
};
