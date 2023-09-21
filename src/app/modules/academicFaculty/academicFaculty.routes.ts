import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();
router.get('/:id', AcademicFacultyController.getSingleDataFromDB);
router.patch(
  '/:id',
  // validateRequest(academicSemesterValidation.UpdateAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicFacultyController.UpdateIntoDB
);
router.delete('/:id', AcademicFacultyController.DeletedFromDb);
router.get('/', AcademicFacultyController.getAllFromDB);

router.post(
  '/create',
  // validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicFacultyController.insertIntoDB
);
export const AcademicFacultyRoutes = router;
