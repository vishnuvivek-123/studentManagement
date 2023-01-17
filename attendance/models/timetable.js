import Sequelize, { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config.js';

const Timetable = sequelize.define('Timetable', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  scheduled: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  hour: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  day: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: true,
});

Timetable.associate = (models) => {
  Timetable.hasMany(models.Attendance, {
    foreignKey: 'schedule',
  });
};

export default Timetable;
