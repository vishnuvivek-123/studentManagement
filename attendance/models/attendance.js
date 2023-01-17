import Sequelize, { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

const Attendance = sequelize.define('attendance', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  is_present: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  type: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  type: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  type_: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  type: {
    type: DataTypes.UUID,
    allowNull: false,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

Fcm.associate = (models) => {
  Fcm.hasMany(models.user, {
    foreignKey: 'user_id',
  });
};

export default Fcm;
