import Attendance from '../../models/attendance.js';
import User from '../../models/user.js';
import AttendanceType from '../../models/attendance_type.js';
import Timetable from '../../models/timetable.js';
import BadRequest from '../../helper/exception/badRequest.js';

const create = async (data) => {
  const attendance = new Attendance(data);

  return attendance.save();
};

async function update(id, data) {
  const attendance = await Attendance.findByPk(id);
  if (!attendance || attendance.isDeleted) {
    throw new BadRequest('Attendance not found');
  }

  return attendance.update(data);
}

async function remove(id) {
  const attendance = await Attendance.findByPk(id);
  if (!attendance || attendance.isDeleted) {
    throw new BadRequest('Attendance not found');
  }

  return attendance.update({ isDeleted: true });
}

async function get(id) {
  return Attendance.findByPk(id, {
    include: [
      {
        model: User,
      },
      {
        model: AttendanceType,
      },
      {
        model: Timetable,
      },
    ],
  });
}

async function list() {
  return Attendance.findAll({
    where: { isDeleted: false },
    include: [
      {
        model: User,
      },
      {
        model: AttendanceType,
      },
      {
        model: Timetable,
      },
    ],
  });
}

export default {
  create,
  update,
  remove,
  get,
  list,
};
