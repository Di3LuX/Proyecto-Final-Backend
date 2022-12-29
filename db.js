
const { Sequelize, DataTypes } = require('sequelize');
const config = require('./config/config.json');
const dotenv = require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
  }
);

module.exports = sequelize.authenticate()
  .then((db) => {
    console.log('MYSQL connected');
    return db;
  });