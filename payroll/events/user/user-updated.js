import userService from '../../api/user/service.js';

async function userUpdated(user) {
  await userService.update(user);
}

export default {
  event: 'UserUpdated',
  handler: userUpdated,
};
