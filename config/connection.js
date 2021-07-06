//import Sequelize constructor
const Sequelize = require('sequelize');

require('dotenv').config();

//Create connection to database while passing in MySQL login information
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;