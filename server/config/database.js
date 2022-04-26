
const Sequelize = require('sequelize')

const sequelize = new Sequelize('e-commerce', 'matt', 'mastew', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;