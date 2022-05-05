
const Sequelize = require('sequelize')

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_DIALECT, DB_HOST } = process.env;
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {dialect: DB_DIALECT, host: DB_HOST});

module.exports = sequelize;