import Sequelize, { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

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
  leaveType: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  totalNumOfLeave: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numOfLeaveAvailable: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
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
  Payroll.belongsTo(models.LeaveType, {
    foreignKey: 'leaveType',
  });
};

export default Payroll;
