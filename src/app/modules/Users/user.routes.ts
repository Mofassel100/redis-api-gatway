import express, { NextFunction, Request, Response } from 'express';
import { UserController } from './user.controller';
import { FildUploadCloud } from '../../../helpers/FildUploadHelper';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { UserValidation } from './user.validation';
const router = express.Router();
router.post(
  '/create-student',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  FildUploadCloud.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createStudentZodSchema.parse(JSON.parse(req.body.data));
    return UserController.createStudent(req, res, next);
  }
);
export const UserRouter = router;
