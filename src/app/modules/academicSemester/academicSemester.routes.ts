import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();
router.get('/:id', AcademicSemesterController.getSingleDataFromDB);
router.patch(
  '/:id',
  validateRequest(academicSemesterValidation.UpdateAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicSemesterController.UpdateIntoDB
);
router.delete('/:id', AcademicSemesterController.DeletedFromDb);
router.get('/', AcademicSemesterController.getAllFromDB);

router.post(
  '/',
  validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicSemesterController.insertIntoDB
);
export const AcademicSemesterRoutes = router;
