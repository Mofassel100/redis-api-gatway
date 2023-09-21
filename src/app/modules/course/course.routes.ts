import express from 'express';
import { CourseController } from './course.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();
router.get('/:id', CourseController.getSingleDataFromDB);
router.patch(
  '/:id',
  // validateRequest(academicSemesterValidation.UpdateAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  CourseController.UpdateIntoDB
);
router.delete('/:id', CourseController.DeletedFromDb);
router.get('/', CourseController.getAllFromDB);

router.post(
  '/',
  // validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  CourseController.insertIntoDB
);
export const CourseRoutes = router;
