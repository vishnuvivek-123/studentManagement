import express from 'express';
import controller from './controller.js';
import validator from './validator.js';

const router = express.Router();

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
 *               default: true
 *              userId:
 *               type: string
 *               required: true
 *               default: ''
 *              type:
 *               type: string
 *               required: true
 *               default: ''
 *              schedule:
 *               type: string
 *               required: true
 *               default: ''
 *              remark:
 *               type: string
 *               required: false
 *               default: ''
 *     responses:
 *       200:
 *         description: Attendance created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/', validator.create, controller.create);

/**
 * @swagger
 * /api/attendance/{id}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Update attendance
 *     tags:
 *       - Attendance
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
 *              isPresent:
 *               type: boolean
 *               required: false
 *              type:
 *               type: string
 *               required: false
 *               default: ''
 *              schedule:
 *               type: string
 *               required: false
 *               default: ''
 *              remark:
 *               type: string
 *               required: false
 *               default: ''
 *     responses:
 *       200:
 *         description: Attendance updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Attendance not found
 *       500:
 *         description: Internal server error
 */
router.patch('/:id', validator.validateId, validator.update, controller.update);

/**
 * @swagger
 * /api/attendance/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Get attendance
 *    tags:
 *      - Attendance
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      200:
 *        description: Attendance retrieved successfully
 *      400:
 *        description: Bad request
 *      404:
 *         description: Attendance not found
 *      500:
 *        description: Internal server error
 */
router.get('/:id', validator.validateId, controller.get);

/**
 * @swagger
 * /api/attendance/{id}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    summary: Delete attendance
 *    tags:
 *      - Attendance
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      200:
 *        description: Attendance deleted successfully
 *      400:
 *        description: Bad request
 *      404:
 *         description: Attendance not found
 *      500:
 *        description: Internal server error
 */
router.delete('/:id', validator.validateId, controller.remove);

/**
 * @swagger
 * /api/attendance:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Get all attendance
 *    tags:
 *      - Attendance
 *    responses:
 *      200:
 *        description: Attendance retrieved successfully
 *      400:
 *        description: Bad request
 *      500:
 *        description: Internal server error
 */
router.get('/', controller.list);

export default router;
