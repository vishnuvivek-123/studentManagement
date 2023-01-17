import Sequelize, { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

const AttendanceType = sequelize.define('AttendanceType', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  timestamps: true,
});

AttendanceType.associate = (models) => {
  AttendanceType.belongsTo(models.Attendance, {
    foreignKey: 'type',
  });
};

export default AttendanceType;
