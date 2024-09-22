// src/models/Todolist.js
import { DataTypes } from 'sequelize';
import sequelize from '../database/config/sequelize';

const Todolist = sequelize.define('Todolist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  task_description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  is_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  is_locked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    }
  },
}, {
  tableName: 'todolist-table',
  timestamps: false,
});

export default Todolist;
