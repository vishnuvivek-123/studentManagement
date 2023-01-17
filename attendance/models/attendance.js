import Sequelize, { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

const Attendance = sequelize.define('attendance', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  is_present: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  user_id: {
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
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

Attendance.associate = (models) => {
  Attendance.belongsTo(models.user, {
    foreignKey: 'user_id',
  });
};

export default Attendance;
