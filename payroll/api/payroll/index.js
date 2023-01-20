import express from 'express';
import controller from './controller.js';
import validator from './validator.js';

const router = express.Router();

/**
 * @swagger
 * /api/payroll/{id}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Update payroll
 *     tags:
 *       - Payroll
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              amount:
 *                schema:
 *                  type: integer
 *                example: 1000
 *                description: Amount to be paid
 *                required: true
 *              accountNumber:
 *                schema:
 *                  type: string
 *                example: 1234567890
 *                description: Account number
 *                required: true
 *              IFSCNumber:
 *                schema:
 *                  type: string
 *                example: SBIN0000000
 *                description: IFSC number
 *                required: true
 *              upiId:
 *                schema:
 *                  type: string
 *                example: 1234567890@upi
 *                description: UPI ID
 *                required: true
 *     responses:
 *       200:
 *         description: Payroll updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Payroll not found
 *       500:
 *         description: Payroll server error
 */
router.patch('/:id', validator.validateId, controller.update);

/**
 * @swagger
 * /api/payroll/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Get payroll
 *    tags:
 *      - Payroll
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      200:
 *        description: Payroll retrieved successfully
 *      400:
 *        description: Bad request
 *      404:
 *         description: Payroll not found
 *      500:
 *        description: Internal server error
 */
router.get('/:id', validator.validateId, controller.get);

/**
 * @swagger
 * /api/payroll:
 *   get:
 *     tags:
 *       - Payroll
 *     name: get list
 *     summary: payroll list
 *     parameters:
 *       - name: userId
 *         in: query
 *         required: false
 *         description: user id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *          200:
 *            description: Payroll listed successfully
 *          400:
 *            description: Bad request
 *          401:
 *            description: Unauthorized
 *          500:
 *            description: Internal server error
 */
router.get('/', controller.list);

export default router;
