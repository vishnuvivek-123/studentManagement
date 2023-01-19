import Sequelize, { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

const Leave = sequelize.define('Leave', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  user: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  isHalfDay: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    default: false,
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  timestamps: true,
});

Leave.associate = (models) => {
  Leave.belongsTo(models.User, {
    foreignKey: 'user',
  });
};

export default Leave;
