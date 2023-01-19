import Sequelize, { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

const LeaveType = sequelize.define('LeaveType', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  typeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: true,
});

LeaveType.associate = (models) => {
  LeaveType.hasMany(models.Payroll, {
    foreignKey: 'leaveType',
  });
};

export default LeaveType;
