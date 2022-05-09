
const Sequelize = require('sequelize')

const sequelize = new Sequelize('e-commerce', 'matt', 'kingkong', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;