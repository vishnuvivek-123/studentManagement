import Sequelize, { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

const Transaction = sequelize.define('Transaction', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  payedAmount: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  txnStatus: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  paymentMode: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  txnId: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  payroll: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  timestamps: true,
});

Transaction.associate = (models) => {
  Transaction.belongsTo(models.Payroll, {
    foreignKey: 'payroll',
  });
};

export default Transaction;
