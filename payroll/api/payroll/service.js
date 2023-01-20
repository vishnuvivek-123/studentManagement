import Payroll from '../../models/payroll.js';
import BadRequest from '../../helper/exception/badRequest.js';
import User from '../../models/user.js';

const create = async (data) => {
  const payroll = new Payroll(data);
  return payroll.save();
};

async function update(id, data) {
  const payroll = await Payroll.findOne({ where: { user: id } });
  if (!payroll || payroll.isDeleted) {
    throw new BadRequest('not found');
  }

  return payroll.update(data);
}

async function get(id) {
  const payroll = await Payroll.findOne({
    where: { user: id },
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

async function list() {
  return Payroll.findAll({
    where: { isDeleted: false },
    include: [
      {
        model: User,
      },
    ],
  });
}

async function processSalary() {
  const payrolls = await Payroll.findAll({ where: { isDeleted: false } });
  await Promise.all(payrolls.map(async (payroll) => {
    try {
      await payroll.sendSalary();
    } catch (e) {
      console.log(e);
    }
  }));
}

export default {
  create,
  update,
  get,
  list,
  processSalary,
};
