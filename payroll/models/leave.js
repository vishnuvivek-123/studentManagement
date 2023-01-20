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
  isLossOfPay: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    default: false,
  },
  leaveCount: {
    type: DataTypes.VIRTUAL,
    get() {
      if (this.isLossOfPay) {
        if (this.isHalfDay) {
          return 0.5;
        }
        return 1;
      }
      return 0;
    },
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
