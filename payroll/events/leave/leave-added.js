import { logger } from '../../config/winston-config.js';

async function leaveAdded(leave) {
  logger.debug(leave);
}

export default {
  event: 'LeaveAdded',
  handler: leaveAdded,
};
