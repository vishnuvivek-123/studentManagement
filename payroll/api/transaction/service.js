import BadRequest from '../../helper/exception/badRequest.js';
import Transaction from '../../models/transaction.js';
import Payroll from '../../models/payroll.js';

async function get(id) {
  const transaction = await Transaction.findOne({
    where: { id },
    include: [
      {
        model: Payroll,
      },
    ],
  });

  if (!transaction) {
    throw new BadRequest('not found');
  }

  return transaction;
}

async function list() {
  return Transaction.findAll({
    include: [
      {
        model: Payroll,
      },
    ],
  });
}

export default {
  get,
  list,
};
