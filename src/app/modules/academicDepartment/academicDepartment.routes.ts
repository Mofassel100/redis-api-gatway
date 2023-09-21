import express from 'express';
import { AcademicDepartmentController } from './academicDepartment.controller';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();
router.get('/:id', AcademicDepartmentController.getSingleDataFromDB);
router.patch(
  '/:id',
  // validateRequest(academicSemesterValidation.UpdateAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicDepartmentController.UpdateIntoDB
);
router.delete('/:id', AcademicDepartmentController.DeletedFromDb);
router.get('/', AcademicDepartmentController.getAllFromDB);

router.post(
  '/create',
  // validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicDepartmentController.insertIntoDB
);
export const AcademicDepartmentRoutes = router;
