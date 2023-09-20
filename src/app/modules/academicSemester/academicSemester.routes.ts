import express from 'express';
import { AcademicSemesterController } from './academicSemester.controller';
const router = express.Router();
router.get('/:id', AcademicSemesterController.getSingleDataFromDB);
router.patch('/:id', AcademicSemesterController.UpdateIntoDB);
router.delete('/:id', AcademicSemesterController.DeletedFromDb);
router.get('/', AcademicSemesterController.getAllFromDB);

router.post('/', AcademicSemesterController.insertIntoDB);
export const AcademicSemesterRoutes = router;
