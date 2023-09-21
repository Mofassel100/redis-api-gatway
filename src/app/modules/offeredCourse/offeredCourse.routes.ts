import express from 'express';
import { OfferdCourseController } from './offeredCourse.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();
router.get('/:id', OfferdCourseController.getSingleDataFromDB);
router.patch(
  '/:id',
  // validateRequest(academicSemesterValidation.UpdateAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferdCourseController.UpdateIntoDB
);
router.delete('/:id', OfferdCourseController.DeletedFromDb);
router.get('/', OfferdCourseController.getAllFromDB);

router.post(
  '/',
  // validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferdCourseController.insertIntoDB
);
export const OfferedCourseRoute = router;
