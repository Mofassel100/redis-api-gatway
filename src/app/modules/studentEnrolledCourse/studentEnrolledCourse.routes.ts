import express from 'express';
import { StudentEnrolledCourseController } from './studentEnrolledCourse.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();
router.get('/:id', StudentEnrolledCourseController.getSingleDataFromDB);
router.patch(
  '/:id',
  // validateRequest(academicSemesterValidation.UpdateAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentEnrolledCourseController.UpdateIntoDB
);
router.delete('/:id', StudentEnrolledCourseController.DeletedFromDb);
router.get('/', StudentEnrolledCourseController.getAllFromDB);

router.post(
  '/',
  // validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  StudentEnrolledCourseController.insertIntoDB
);
export const StudentEnrolledCourseRoute = router;
