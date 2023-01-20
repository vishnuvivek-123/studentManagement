import Attendance from '../../models/attendance.js';
import User from '../../models/user.js';
import AttendanceType from '../../models/attendance_type.js';
import Timetable from '../../models/timetable.js';
import BadRequest from '../../helper/exception/badRequest.js';

const create = async (data) => {
  const user = new User(data);

  return user.save();
};

async function update(id, data) {
  const user = await User.findByPk(id);
  if (!user) {
    throw new BadRequest('User not found');
  }

  return user.update(data);
}

async function remove(id) {
  const user = await User.findByPk(id);
  if (!user) {
    throw new BadRequest('User not found');
  }

  return user.update({ isDeleted: true });
}

async function get(id) {
  const user = await User.findByPk(id);
  if (!user || user.isDeleted) {
    throw new BadRequest('User not found');
  }
}

async function list() {
  return User.findAll({
    where: { isDeleted: false },
  });
}

export default {
  create,
  update,
  remove,
  get,
  list,
};
