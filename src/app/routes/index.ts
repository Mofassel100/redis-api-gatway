import express from 'express';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.routes';
import { AcademicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.routes';
import { BuildingRoutes } from '../modules/building/building.routes';
import { RoomRoutes } from '../modules/room/room.routes';
import { CourseRoutes } from '../modules/course/course.routes';
import { SemesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.routes';
import { OfferedCourseRoute } from '../modules/offeredCourse/offeredCourse.routes';
import { OfferedCorseSectionRoute } from '../modules/offeredCourseSection/offeredCourseSection.routes';
import { OfferedCourseClassScheduleRoute } from '../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes';
import { StudentEnrolledCourseRoute } from '../modules/studentEnrolledCourse/studentEnrolledCourse.routes';
import { StudentEnrolledCourseMarkRoute } from '../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes';
import { StudentSemesterPaymentRoute } from '../modules/semesterPayment/semesterPayment.routes';
import { UserRouter } from '../modules/Users/user.routes';
import { AdminRoute } from '../modules/admin/admin.routes';
import { AuthRoute } from '../modules/auth/auth.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    routes: AuthRoute
  },
  {
    path: '/academic-semesters',
    routes: AcademicSemesterRoutes
  },
  {
    path: '/academic-depertment',
    routes: AcademicDepartmentRoutes
  },
  {
    path: '/academic-faculty',
    routes: AcademicFacultyRoutes
  },
  {
    path: '/building',
    routes: BuildingRoutes
  },
  {
    path: '/rooms',
    routes: RoomRoutes
  },
  {
    path: '/courses',
    routes: CourseRoutes
  },
  {
    path: '/semester-registration',
    routes: SemesterRegistrationRoutes
  },
  {
    path: '/offered-course',
    routes: OfferedCourseRoute
  },
  {
    path: '/offered-course-section',
    routes: OfferedCorseSectionRoute
  },
  {
    path: '/offered-course-class-schedule',
    routes: OfferedCourseClassScheduleRoute
  },
  {
    path: '/student-enrolled-course-marks',
    routes: StudentEnrolledCourseMarkRoute
  },
  {
    path: '/student-enrolled-course',
    routes: StudentEnrolledCourseRoute
  },
  {
    path: '/student-enrolled-course-payment',
    routes: StudentSemesterPaymentRoute
  },
  {
    path: '/users',
    routes: UserRouter
  },
  {
    path: '/admins',
    routes: AdminRoute
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
