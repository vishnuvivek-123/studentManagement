import Sequelize from 'sequelize';
import { logger } from './winston-config.js';

/** @type Sequelize  */
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  logging: process.env.DB_LOGGING === 'true' ? (msg) => logger.debug(msg) : false,
});

export default sequelize;
