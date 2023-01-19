import express from 'express';
import payroll from '../api/payroll/index.js';
const router = express.Router();

 router.use('/payroll',payroll);



export default router;
