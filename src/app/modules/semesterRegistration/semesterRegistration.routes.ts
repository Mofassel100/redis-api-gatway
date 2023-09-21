import express from 'express';
import { SemesterRegistrationController } from './semesterRegistration.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();
router.get('/:id', SemesterRegistrationController.getSingleDataFromDB);
router.patch(
  '/:id',
  // validateRequest(academicSemesterValidation.UpdateAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SemesterRegistrationController.UpdateIntoDB
);
router.delete('/:id', SemesterRegistrationController.DeletedFromDb);
router.get('/', SemesterRegistrationController.getAllFromDB);

router.post(
  '/create',
  // validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  SemesterRegistrationController.insertIntoDB
);
export const SemesterRegistrationRoutes = router;
