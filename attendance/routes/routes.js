import express from 'express';
import Attendance from '../api/attendance/index.js';
import AttendanceType from '../api/attendance_type/index.js';
import User from '../api/user/index.js';

const router = express.Router();

router.use('/attendance', Attendance);
router.use('/attendance-type', AttendanceType);
router.use('/user', User);


export default router;
