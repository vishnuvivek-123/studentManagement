import userService from '../../api/user/service.js';
import payrollService from '../../api/payroll/service.js';

async function userCreated(user) {
  await userService.create(user);
  await payrollService.create({
    user: user.id,
    amount: 0,
    accountNumber: '',
    IFSCNumber: '',
    upiId: '',
  });
}

export default {
  event: 'UserCreated',
  handler: userCreated,
};
