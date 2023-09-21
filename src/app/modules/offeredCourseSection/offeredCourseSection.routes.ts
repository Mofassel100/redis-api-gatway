import express from 'express';
import { OfferedCorseSectionController } from './offeredCourseSection.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();
router.get('/:id', OfferedCorseSectionController.getSingleDataFromDB);
router.patch(
  '/:id',
  // validateRequest(academicSemesterValidation.UpdateAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCorseSectionController.UpdateIntoDB
);
router.delete('/:id', OfferedCorseSectionController.DeletedFromDb);
router.get('/', OfferedCorseSectionController.getAllFromDB);

router.post(
  '/',
  // validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  OfferedCorseSectionController.insertIntoDB
);
export const OfferedCorseSectionRoute = router;
