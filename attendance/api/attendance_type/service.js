import AttendanceType from '../../models/attendance_type.js';
import NotFound from '../../helper/exception/notFound.js';

const create = async (data) => {
  const attendance = new AttendanceType({
    type: data.type,
  });

  return attendance.save();
};

async function update(id, data) {
  const attendance = await AttendanceType.findByPk(id);
  if (!attendance || attendance.isDeleted) {
    throw new NotFound('Attendance type not found');
  }

  attendance.type = data.type;
  return attendance.save();
}

async function remove(id) {
  const attendance = await AttendanceType.findByPk(id);
  if (!attendance || attendance.isDeleted) {
    throw new NotFound('Attendance type not found');
  }

  attendance.isDeleted = true;
  return attendance.save();
}

async function get(id) {
  return AttendanceType.findByPk(id);
}

async function list() {
  return AttendanceType.findAll({
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
