import express from 'express';
import { AuthController } from './auth.controller';
import auth from '../../middlewares/auth';
import { AuthValidation } from './auth.validation';
import { ENUM_USER_ROLE } from '../../../enums/user';
import validateRequest from '../../middlewares/validateRequest';
const router = express.Router();
router.post('/login', validateRequest(AuthValidation.createZodSchema), AuthController.loginUser);
router.post(
  '/refresh-token',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.STUDENT,
    ENUM_USER_ROLE.FACULTY
  ),
  validateRequest(AuthValidation.refreshTokenZodSchema),
  AuthController.refreshToken
);
router.post(
  '/change-password',
  auth(
    ENUM_USER_ROLE.ADMIN,
    ENUM_USER_ROLE.SUPER_ADMIN,
    ENUM_USER_ROLE.STUDENT,
    ENUM_USER_ROLE.FACULTY
  ),
  validateRequest(AuthValidation.changePasswordZodSchema),
  AuthController.changePassword
);
export const AuthRoute = router;
