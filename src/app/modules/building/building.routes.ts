import express from 'express';
import { BuildingController } from './building.controller';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
const router = express.Router();
router.get('/:id', BuildingController.getSingleDataFromDB);
router.patch(
  '/:id',
  // validateRequest(academicSemesterValidation.UpdateAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BuildingController.UpdateIntoDB
);
router.delete('/:id', BuildingController.DeletedFromDb);
router.get('/', BuildingController.getAllFromDB);

router.post(
  '/create',
  // validateRequest(academicSemesterValidation.createAcademicSemesterZodSchema),
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  BuildingController.insertIntoDB
);
export const BuildingRoutes = router;
