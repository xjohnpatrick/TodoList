// src/database/sync.js
const sequelize = require('./config/sequelize');
// const Todolist = require('../models/Todolist');

const syncDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ force: true }); // Use { force: true } to recreate the table
    console.log('Database & tables created!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

syncDatabase();
