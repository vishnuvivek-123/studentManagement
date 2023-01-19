import express from 'express';
import controller from './controller.js';
import validator from './validator.js';

const router = express.Router();

/**
 * @swagger
 * /api/payroll:
 *   post:
 *     security:
 *          - bearerAuth: []
 *     summary: Create payroll
 *     tags:
 *       - Payroll
 *     requestBody:
 *       content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              user:
 *               type: string
 *               required: true
 *               default: ''
 *              leaveType:
 *               type: string
 *               required: true
 *               default: ''
 *              totalNumOfLeave:
 *               type: number
 *               required: true
 *               default: ''
 *              numOfLeaveAvailable:
 *               type: number
 *               required: false
 *               default: ''
 *     responses:
 *       200:
 *         description: Payroll created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/', validator.create, controller.create);
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
 *              totalNumOfLeave:
 *               type: number
 *               required: false
 *               default: ''
 *              numOfLeaveAvailable:
 *               type: number
 *               required: false
 *               default: ''
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
router.patch('/:id', validator.update, controller.update);
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
router.get('/:id', controller.get);
/**
 * @swagger
 * /api/payroll/{id}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    summary: Delete payroll
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
 *        description: Payroll deleted successfully
 *      400:
 *        description: Bad request
 *      404:
 *         description: Payroll not found
 *      500:
 *        description: Internal server error
 */
router.delete('/:id', controller.remove);
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
