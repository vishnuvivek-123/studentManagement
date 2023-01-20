import Sequelize, { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

const User = sequelize.define('User', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  fName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lName: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  emailId: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  contactNum: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  userRole: {
    type: DataTypes.STRING(25),
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

User.associate = (models) => {
  User.hasMany(models.Attendance, {
    foreignKey: 'user',
  });
};

export default User;
