import Payroll from '../../models/payroll.js';
import BadRequest from '../../helper/exception/badRequest.js';
import User from '../../models/user.js';

const create = async (data) => {
  const payroll = new Payroll(data);

  return payroll.save();
};
async function update(id, data) {
  const payroll = await Payroll.findByPk(id);
  if (!payroll || payroll.isDeleted) {
    throw new BadRequest('not found');
  }

  return payroll.update(data);
}
async function remove(id) {
  const payroll = await Payroll.findByPk(id);
  if (!payroll || payroll.isDeleted) {
    throw new BadRequest('not found');
  }

  return payroll.update({ isDeleted: true });
}
async function get(id) {
  const payroll = await Payroll.findByPk(id, {
    include: [
      {
        model: User,
      },
    ],
  });
  if (!payroll || payroll.isDeleted) {
    throw new BadRequest('not found');
  }
  return payroll;
}
async function list(userId) {
  return Payroll.findAll({
    where: { isDeleted: false, user: userId },
    include: [
      {
        model: User,
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
