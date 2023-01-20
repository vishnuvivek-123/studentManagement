import Sequelize, { DataTypes } from 'sequelize';
import dayjs from 'dayjs';
import sequelize from '../config/sequelize-config.js';
import Leave from './leave.js';
import Transaction from './transaction.js';

const Payroll = sequelize.define('Payroll', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  user: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  accountNumber: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  IFSCNumber: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  upiId: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
}, {
  timestamps: true,
});

Payroll.associate = (models) => {
  Payroll.belongsTo(models.User, {
    foreignKey: 'user',
  });

  Payroll.hasMany(models.Transaction, {
    foreignKey: 'payroll',
  });
};

Payroll.prototype.sendSalary = async () => {
  // eslint-disable-next-line no-invalid-this
  const payroll = this ?? {};

  const salaryMonth = dayjs().subtract(1, 'month');
  const noOfDays = salaryMonth.daysInMonth();
  const amountPerDay = payroll.amount / noOfDays;

  const isPaid = await Transaction.findOne({
    where: {
      payroll: payroll.id,
      createdAt: {
        [Sequelize.Op.gte]: salaryMonth.startOf('month').toDate(),
        [Sequelize.Op.lte]: salaryMonth.endOf('month').toDate(),
      },
    },
  });

  if (isPaid) {
    return;
  }

  const leaves = await Leave.findAll({
    where: { isDeleted: false, user: payroll.user },
  });

  const noOfLeave = leaves.reduce((acc, leave) => acc + leave.leaveCount, 0);
  const amount = payroll.amount - (amountPerDay * noOfLeave);

  const transaction = new Transaction({
    payedAmount: amount,
    txnStatus: 'Paid',
    paymentMode: 'Stripe',
    txnId: 'stripe_txn_id',
    payroll: payroll.id,
  });
  await transaction.save();
};

export default Payroll;
