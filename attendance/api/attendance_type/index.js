import express from 'express';
import controller from './controller.js';
import validator from './validator.js';

const router = express.Router();

/**
 * @swagger
 * /api/attendance-type:
 *   post:
 *     security:
 *          - bearerAuth: []
 *     summary: Create attendance type
 *     tags:
 *       - Attendance Type
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 required: true
 *                 description: Type of attendance
 *                 default: ''
 *                 schema:
 *                   type: string
 *     responses:
 *       200:
 *         description: Attendance type created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/', validator.attendanceType, controller.create);

/**
 * @swagger
 * /api/attendance-type/{id}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Update attendance type
 *     tags:
 *       - Attendance Type
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 required: true
 *                 description: Type of attendance
 *                 default: ''
 *                 schema:
 *                   type: string
 *     responses:
 *       200:
 *         description: Attendance type updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Attendance type not found
 *       500:
 *         description: Internal server error
 */
router.patch('/:id', validator.validateId, validator.attendanceType, controller.update);

/**
 * @swagger
 * /api/attendance-type/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Get attendance type
 *    tags:
 *      - Attendance Type
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      200:
 *        description: Attendance type retrieved successfully
 *      400:
 *        description: Bad request
 *      404:
 *        description: Attendance type not found
 *      500:
 *        description: Internal server error
 */
router.get('/:id', validator.validateId, controller.get);

/**
 * @swagger
 * /api/attendance-type/{id}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    summary: Delete attendance type
 *    tags:
 *      - Attendance Type
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      200:
 *        description: Attendance type deleted successfully
 *      400:
 *        description: Bad request
 *      404:
 *        description: Attendance type not found
 *      500:
 *        description: Internal server error
 */
router.delete('/:id', validator.validateId, controller.remove);

/**
 * @swagger
 * /api/attendance-type:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Get all attendance type
 *    tags:
 *      - Attendance Type
 *    responses:
 *      200:
 *        description: Attendance type retrieved successfully
 *      400:
 *        description: Bad request
 *      500:
 *        description: Internal server error
 */
router.get('/', controller.list);

export default router;
