import Sequelize, { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

const Attendance = sequelize.define('Attendance', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  user: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  type: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  schedule: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  remark: {
    type: DataTypes.TEXT,
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

Attendance.associate = (models) => {
  Attendance.belongsTo(models.User, {
    foreignKey: 'user',
  });

  Attendance.belongsTo(models.AttendanceType, {
    foreignKey: 'type',
  });

  Attendance.belongsTo(models.Timetable, {
    foreignKey: 'schedule',
  });
};

export default Attendance;
