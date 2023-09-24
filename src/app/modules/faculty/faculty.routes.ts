import express from 'express';
import { FacultyController } from './faculty.controller';
const router = express.Router();
router.patch('/:id', FacultyController.UpdateFaculy);
router.get('/:id', FacultyController.getSingleDataFromDB);
router.get('/', FacultyController.getAllFromDB);
router.delete('/:id', FacultyController.deleteFacultyFromDB);

export const FacultyRoutes = router;
