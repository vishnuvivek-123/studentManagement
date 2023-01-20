import express from 'express';
import payroll from '../api/payroll/index.js';
import transaction from '../api/transaction/index.js';

const router = express.Router();

router.use('/payroll', payroll);
router.use('transaction', transaction);

export default router;
