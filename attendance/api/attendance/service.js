import Attendance from '../../models/attendance.js';

const create = async (data) => {
  const {
    isPresent, userId, type, schedule, remark,
  } = data;
  const attendance = new Attendance({
    is_present: isPresent, user_id: userId, type, schedule, remark,
  });

  const result = await attendance.save();
  return result;
};
export default { create };
