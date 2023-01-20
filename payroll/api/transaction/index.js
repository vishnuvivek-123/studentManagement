import express from 'express';
import controller from './controller.js';
import validator from './validator.js';

const router = express.Router();

/**
 * @swagger
 * /api/transaction/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Get Transaction
 *    tags:
 *      - Transaction
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      200:
 *        description: Transaction retrieved successfully
 *      400:
 *        description: Bad request
 *      404:
 *        description: Transaction not found
 *      500:
 *        description: Internal server error
 */
router.get('/:id', validator.validateId, controller.get);

/**
 * @swagger
 * /api/transaction:
 *   get:
 *     tags:
 *       - Transaction
 *     name: get list
 *     summary: Transaction list
 *     parameters:
 *       - name: userId
 *         in: query
 *         required: false
 *         description: user id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *          200:
 *            description: Transaction listed successfully
 *          400:
 *            description: Bad request
 *          401:
 *            description: Unauthorized
 *          500:
 *            description: Internal server error
 */
router.get('/', controller.list);

export default router;
