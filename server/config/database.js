
const Sequelize = require('sequelize')

const sequelize = new Sequelize('sql5490595', 'sql5490595', 'arj7fxmYK8', {dialect: 'mysql', host: '3306'});

module.exports = sequelize;