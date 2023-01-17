import Sequelize, { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

const User = sequelize.define('user', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  full_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  contact_number: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  user_role: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

User.associate = (models) => {
  User.hasMany(models.attendance, {
    foreignKey: 'user_id',
  });
};

export default User;
