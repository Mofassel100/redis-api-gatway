import { Request } from 'express';
import { FildUploadCloud } from '../../../helpers/FildUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';
import { authServiceUrl } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';
const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const { academicFaculty, academicDepartment, academicSemester } = req.body.student;
  const UploadImages: ICloudinaryResponse = await FildUploadCloud.UploadCloudinary(file);
  // img assign
  if (UploadImages) {
    req.body.student.profileImage = UploadImages.secure_url;
  }
  const academicDepartmentResponse = await authServiceUrl.get(
    `/academic-depertment?syncId=${academicDepartment}`
  );
  // academic Department assign
  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.student.academicDepartment = academicDepartmentResponse.data[0].id;
  }
  const academicFacultyResponse = await authServiceUrl.get(
    `/academic-faculty?syncId=${academicFaculty}`
  );
  // academicFaculty assign
  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.student.academicFaculty = academicFacultyResponse.data[0].id;
  }
  const academicSemesterResponse = await authServiceUrl.get(
    `/academic-semesters?syncId=${academicSemester}`
  );
  // academicSemester assign
  if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
    req.body.student.academicSemester = academicSemesterResponse.data[0].id;
  }
  const response: IGenericResponse = await authServiceUrl.post('/users/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const createFaculty = async (req: Request) => {
  const file = req.file as IUploadFile;
  const UploadImages: ICloudinaryResponse = await FildUploadCloud.UploadCloudinary(file);
  // img assign
  if (UploadImages) {
    req.body.faculty.profileImage = UploadImages.secure_url;
  }
  const { academicFaculty, academicDepartment } = req.body.faculty;
  console.log(file, academicDepartment, academicFaculty);

  const academicDepartmentResponse = await authServiceUrl.get(
    `/academic-depertment?syncId=${academicDepartment}`
  );
  // academic Department assign
  if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
    req.body.faculty.academicDepartment = academicDepartmentResponse.data[0].id;
  }
  const academicFacultyResponse = await authServiceUrl.get(
    `/academic-faculty?syncId=${academicFaculty}`
  );
  // academicFaculty assign
  if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
    req.body.faculty.academicFaculty = academicFacultyResponse.data[0].id;
  }
  const response: IGenericResponse = await authServiceUrl.post('/users/create-faculty', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
const createAdmin = async (req: Request) => {
  const file = req.file as IUploadFile;
  const UploadImages: ICloudinaryResponse = await FildUploadCloud.UploadCloudinary(file);
  // img assign
  if (UploadImages) {
    req.body.admin.profileImage = UploadImages.secure_url;
  }
  const response: IGenericResponse = await authServiceUrl.post('/users/create-admin', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
export const UserService = {
  createStudent,
  createFaculty,
  createAdmin
};
