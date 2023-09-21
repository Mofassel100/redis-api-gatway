import express from 'express';
import { OfferedCourseClassScheduleController } from './offeredCourseClassSchedule.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();
router.get('/:id', OfferedCourseClassScheduleController.getSingleDataFromDB);
router.patch(
  '/:id',
  // validateRequest(academicSemesterValidation.UpdateAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseClassScheduleController.UpdateIntoDB
);
router.delete('/:id', OfferedCourseClassScheduleController.DeletedFromDb);
router.get('/', OfferedCourseClassScheduleController.getAllFromDB);

router.post(
  '/',
  // validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCourseClassScheduleController.insertIntoDB
);
export const OfferedCourseClassScheduleRoute = router;
