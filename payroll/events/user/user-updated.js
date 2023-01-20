
function userCreated(user) {
  console.log('User updated', user);
}

export default {
  event: 'UserUpdated',
  handler: userCreated,
};
