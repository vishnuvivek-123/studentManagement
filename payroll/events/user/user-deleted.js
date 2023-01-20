import userService from '../../api/user/service.js';
import payrollService from '../../api/payroll/service.js';

async function userDeleted(user) {
  await userService.update(user.id, { isDeleted: true });
  await payrollService.update(user.id, { isDeleted: true });
}

export default {
  event: 'UserDeleted',
  handler: userDeleted,
};
