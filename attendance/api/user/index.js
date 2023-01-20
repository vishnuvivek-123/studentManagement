import express from 'express';
import controller from './controller.js';
import validator from './validator.js';

const router = express.Router();

/**
 * @swagger
 * /api/user:
 *   post:
 *     security:
 *          - bearerAuth: []
 *     summary: Create user
 *     tags:
 *       - User
 *     requestBody:
 *       content:
 *         application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fName:
 *               type: string
 *               required: true
 *               default: ''
 *              lName:
 *               type: string
 *               required: true
 *               default: ''
 *              emailId:
 *               type: string
 *               required: true
 *               default: ''
 *              contactNum:
 *               type: string
 *               required: true
 *               default: ''
 *              password:
 *               type: string
 *               required: true
 *               default: ''
 *              userRole:
 *               type: string
 *               required: true
 *               default: ''
 *     responses:
 *       200:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/', validator.create, controller.create);

/**
 * @swagger
 * /api/user/{id}:
 *   patch:
 *     security:
 *       - bearerAuth: []
 *     summary: Update user
 *     tags:
 *       - User
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
 *              fName:
 *               type: string
 *               required: false
 *               default: ''
 *              lName:
 *               type: string
 *               required: false
 *               default: ''
 *              contactNum:
 *               type: string
 *               required: false
 *               default: ''
 *     responses:
 *       200:
 *         description: User updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
router.patch('/:id', validator.validateId, validator.update, controller.update);

/**
 * @swagger
 * /api/user/{id}:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Get user
 *    tags:
 *      - User
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      200:
 *        description: User retrieved successfully
 *      400:
 *        description: Bad request
 *      404:
 *         description: User not found
 *      500:
 *        description: Internal server error
 */
router.get('/:id', validator.validateId, controller.get);

/**
 * @swagger
 * /api/user/{id}:
 *  delete:
 *    security:
 *      - bearerAuth: []
 *    summary: Delete User
 *    tags:
 *      - User
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *          format: uuid
 *    responses:
 *      200:
 *        description: User deleted successfully
 *      400:
 *        description: Bad request
 *      404:
 *         description: User not found
 *      500:
 *        description: Internal server error
 */
router.delete('/:id', validator.validateId, controller.remove);

/**
 * @swagger
 * /api/user:
 *  get:
 *    security:
 *      - bearerAuth: []
 *    summary: Get all user
 *    tags:
 *      - User
 *    responses:
 *      200:
 *        description: User retrieved successfully
 *      400:
 *        description: Bad request
 *      500:
 *        description: Internal server error
 */

router.get('/', controller.list);
/**
 * @swagger
 * /api/user:
 *   get:
 *     tags:
 *       - User
 *     name: get list
 *     summary: user list
 *     parameters:
 *       - name: id
 *         in: query
 *         required: false
 *         description: user id
 *     security:
 *       - bearerAuth: []
 *     responses:
 *          200:
 *            description: User listed successfully
 *          400:
 *            description: Bad request
 *          401:
 *            description: Unauthorized
 *          500:
 *            description: Internal server error
 */
export default router;
