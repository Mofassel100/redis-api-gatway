import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { StudentSemesterPaymentController } from './semesterPayment.controller';
const router = express.Router();

router.get('/', StudentSemesterPaymentController.getPayment);

export const StudentSemesterPaymentRoute = router;
