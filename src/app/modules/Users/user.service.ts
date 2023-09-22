import { Request } from 'express';
import { FildUploadCloud } from '../../../helpers/FildUploadHelper';
import { ICloudinaryResponse, IUploadFile } from '../../../interfaces/file';
import { authServiceUrl } from '../../../shared/axios';
const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const { academicFaculty, academicDepartment, academicSemester } = req.body.student;
  console.log(academicDepartment, academicFaculty, academicSemester);
  const UploadImages: ICloudinaryResponse = await FildUploadCloud.UploadCloudinary(file);
  if (UploadImages) {
    req.body.profileImage = UploadImages.secure_url;
  }
  // academicDepartment: z.string({
  //     required_error: 'Academic department is required',
  //   }),

  //   academicFaculty: z.string({
  //     required_error: 'Academic faculty is required',
  //   }),
  const academicDepartmentResponse = await authServiceUrl.get(
    `/academic-depertment?syncId=${academicDepartment}`
  );
  // if (academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)) {
  //   req.body.academicDepartment = academicDepartmentResponse.data[0].id;
  // }
  const academicFacultyResponse = await authServiceUrl.get(
    `/academic-faculty?syncId=${academicFaculty}`
  );

  // if (academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)) {
  //   req.body.academicFaculty = academicFacultyResponse.data[0].id;
  // }
  const academicSemesterResponse = await authServiceUrl.get(
    `/academic-semesters?syncId=${academicSemester}`
  );

  // if (academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)) {
  //   req.body.academicSemester = academicSemesterResponse.data[0].id;
  // }
  console.log(
    'academicDepartment: ',
    academicDepartmentResponse,
    'Semester',
    academicSemesterResponse,
    'faculty',
    academicFacultyResponse
  );
};
export const UserService = {
  createStudent
};
//  {
//     path: '/academic-semesters/',
//     route: AcademicSemesterRouter,
//   },
//   {
//     path: '/academic-faculty/',
//     route: AcademicFacultyRouter,
//   },
//   {
//     path: '/academic-depertment/',
//     route: AcademicDepartmentRoutes,
//   },
