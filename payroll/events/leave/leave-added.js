
async function leaveAdded(leave) {
  console.log(leave);
}

export default {
  event: 'LeaveAdded',
  handler: leaveAdded,
};
