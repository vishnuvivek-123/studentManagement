
function userCreated(user) {
  console.log('User created', user);
}

export default {
  event: 'UserCreated',
  handler: userCreated,
};
