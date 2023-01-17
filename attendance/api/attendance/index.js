import express from 'express';
import controller from './controller.js';
import validator from './validator.js';

const router = express.Router();

router.post('/', validator.attendance, controller.create);
/**
 * @swagger
 * /api/attendance:
 *   post:
 *     security:
 *          - bearerAuth: []
 *     summary: Create attendance
 *     tags:
 *       - Attendance
 *     requestBody:
 *       content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              isPresent:
 *               type: boolean
 *               required: true
 *              userId:
 *               type: string
 *               required: true
 *              type:
 *               type: string
 *               required: true
 *              schedule:
 *               type: string
 *               required: true
 *              remark:
 *               type: string
 *               required: false
 *     responses:
 *       200:
 *         description: Attendance created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
export default router;
