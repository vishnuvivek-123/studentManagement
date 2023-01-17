import express from 'express';
import Attendance from '../api/attendance/index.js';

const router = express.Router();

router.use('/Attendance', Attendance);


export default router;
